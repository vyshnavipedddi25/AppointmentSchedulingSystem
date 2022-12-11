using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AppSchedule2911.Data;
using AppSchedule2911.Model;

namespace AppSchedule2911.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistersController : ControllerBase
    {
        private readonly AppScheduleDbContext _context;

        public RegistersController(AppScheduleDbContext context)
        {
            _context = context;
        }

        // GET: api/Registers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Register>>> GetRegister()
        {
            return await _context.Register.ToListAsync();
        }

        // GET: api/Registers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Register>> GetRegister(int id)
        {
            var register = await _context.Register.FindAsync(id);

            if (register == null)
            {
                return NotFound();
            }

            return register;
        }

        // PUT: api/Registers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRegister(int id, Register register)
        {
            if (id != register.Uid)
            {
                return BadRequest();
            }

            _context.Entry(register).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegisterExists(id))
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

        // POST: api/Registers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Register>> PostRegister(Register register)
        {
            _context.Register.Add(register);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRegister", new { id = register.Uid }, register);
        }
        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] Register register)
        {
            if (register == null)
                return BadRequest();
            //Check UserName



            if (await CheckUserNameExistAsync(register.UserName))
            {
                return BadRequest(new { Message = "Username Already Exists!!" });
            }



            await _context.Register.AddAsync(register);
            await _context.SaveChangesAsync();
            return Ok(new
            {
                Message = "User Registered!"
            });
        }
        private Task<bool> CheckUserNameExistAsync(string UserName)
            => _context.Register.AnyAsync(x => x.UserName == UserName);
        // DELETE: api/Registers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Register>> DeleteRegister(int id)
        {
            var register = await _context.Register.FindAsync(id);
            if (register == null)
            {
                return NotFound();
            }

            _context.Register.Remove(register);
            await _context.SaveChangesAsync();

            return register;
        }

        private bool RegisterExists(int id)
        {
            return _context.Register.Any(e => e.Uid == id);
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] Register userObj) 
        {
            if(userObj == null)
            {
                return BadRequest();
            }
            var user = await _context.Register.FirstOrDefaultAsync(x => x.UserName == userObj.UserName && x.Password == userObj.Password);
            if(user == null)
            {
                return NotFound(new { Message = "User Not Found" });
            }

            return Ok(new
            {
                Message = "Login Success!!"
            });
        }
    }
}
