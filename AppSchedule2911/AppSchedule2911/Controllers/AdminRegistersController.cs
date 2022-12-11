using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AppSchedule2911.Data;
using AppSchedule2911.Model;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AppSchedule2911.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminRegistersController : ControllerBase
    {
        private readonly AppScheduleDbContext _context;

        public AdminRegistersController(AppScheduleDbContext context)
        {
            _context = context;
        }

        // GET: api/AdminRegisters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AdminRegister>>> GetAdminRegister()
        {
            return await _context.AdminRegister.ToListAsync();
        }

        // GET: api/AdminRegisters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AdminRegister>> GetAdminRegister(int id)
        {
            var adminRegister = await _context.AdminRegister.FindAsync(id);

            if (adminRegister == null)
            {
                return NotFound();
            }

            return adminRegister;
        }

        // PUT: api/AdminRegisters/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdminRegister(int id, AdminRegister adminRegister)
        {
            if (id != adminRegister.Id)
            {
                return BadRequest();
            }

            _context.Entry(adminRegister).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminRegisterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/AdminRegisters
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<AdminRegister>> PostAdminRegister(AdminRegister adminRegister)
        {
            _context.AdminRegister.Add(adminRegister);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAdminRegister", new { id = adminRegister.Id }, adminRegister);
        }

        // DELETE: api/AdminRegisters/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AdminRegister>> DeleteAdminRegister(int id)
        {
            var adminRegister = await _context.AdminRegister.FindAsync(id);
            if (adminRegister == null)
            {
                return NotFound();
            }

            _context.AdminRegister.Remove(adminRegister);
            await _context.SaveChangesAsync();

            return adminRegister;
        }

        private bool AdminRegisterExists(int id)
        {
            return _context.AdminRegister.Any(e => e.Id == id);
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] AdminRegister userObj)
        {
            if (userObj == null)
            {
                return BadRequest();
            }
            var user = await _context.AdminRegister.FirstOrDefaultAsync(x => x.AName == userObj.AName && x.Password == userObj.Password);
            if (user == null)
            {
                return NotFound(new { Message = "User Not Found" });
            }

            user.Token = CreateJWT(user);
            return Ok(new
            {
                Token = user.Token,
                Message = "Login Success!!"
            });
        }

        private string CreateJWT(AdminRegister user)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes("This is My Security Key");
            var identiy = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.Name,user.AName)
            });

            var credentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = identiy,
                Expires = DateTime.Now.AddMinutes(30),
                SigningCredentials = credentials
            };
            var token = jwtTokenHandler.CreateToken(tokenDescriptor);
            return jwtTokenHandler.WriteToken(token);
        }
    }
}
