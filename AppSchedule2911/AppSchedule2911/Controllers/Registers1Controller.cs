using AppSchedule2911.Data;
using AppSchedule2911.Model;
using AppSchedule2911.Service;
using AppSchedule2911.UserCred;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AppSchedule2911.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Registers1Controller : ControllerBase
    {
private readonly ILoginService _loginService;
        private readonly AppScheduleDbContext _context;

        public Registers1Controller(AppScheduleDbContext context, ILoginService loginService)
        {
            _context = context;
            _loginService = loginService;

        }

        [HttpPost]
        [Route("Login")]
        public ActionResult Login(Login user)
        {
            var result = _loginService.login(user);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Invalid userName or Password");
        }
        [HttpPost]
        [Route("Register")]
        public ActionResult Register(Register user)
        {
            var result = _loginService.Register(user);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Not able to register");
        }


    }
}
