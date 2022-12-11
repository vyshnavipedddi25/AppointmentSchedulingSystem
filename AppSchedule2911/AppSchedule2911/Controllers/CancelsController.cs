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
    public class CancelsController : ControllerBase
    {
        private readonly AppScheduleDbContext _context;

        public CancelsController(AppScheduleDbContext context)
        {
            _context = context;
        }

        // GET: api/Cancels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cancel>>> GetCancel()
        {
            return await _context.Cancel.ToListAsync();
        }

        // GET: api/Cancels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cancel>> GetCancel(int id)
        {
            var cancel = await _context.Cancel.FindAsync(id);

            if (cancel == null)
            {
                return NotFound();
            }

            return cancel;
        }

        // PUT: api/Cancels/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCancel(int id, Cancel cancel)
        {
            if (id != cancel.Id)
            {
                return BadRequest();
            }

            _context.Entry(cancel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CancelExists(id))
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

        // POST: api/Cancels
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Cancel>> PostCancel(Cancel cancel)
        {
            _context.Cancel.Add(cancel);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CancelExists(cancel.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCancel", new { id = cancel.Id }, cancel);
        }

        // DELETE: api/Cancels/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cancel>> DeleteCancel(int id)
        {
            var cancel = await _context.Cancel.FindAsync(id);
            if (cancel == null)
            {
                return NotFound();
            }

            _context.Cancel.Remove(cancel);
            await _context.SaveChangesAsync();

            return cancel;
        }

        private bool CancelExists(int id)
        {
            return _context.Cancel.Any(e => e.Id == id);
        }
    }
}
