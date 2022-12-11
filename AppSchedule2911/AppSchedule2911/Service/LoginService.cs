using AppSchedule2911.Model;
using AppSchedule2911.UserCred;
using System.Linq;

namespace AppSchedule2911.Service
{
    public class LoginService : ILoginService
    {
        private readonly IUserService _userService;
        private readonly ITokenGeneration _tokenGeneration;
        public LoginService(IUserService userService, ITokenGeneration tokenGeneration)
        {
            _userService = userService;
            _tokenGeneration = tokenGeneration;
        }
        public Login login(Login userCreds)
        {
            var user = _userService.GetAllUser().FirstOrDefault(u => u.UserName== userCreds.UserName);
            if (user != null)
            {



                if (user.Password != userCreds.Password)
                {
                    return null;
                }
                userCreds.Password = user.Password;
                userCreds.token = _tokenGeneration.GenerateToken(userCreds);
                return userCreds;
            }
            return null;
        }
        public Login Register(Register user)
        {



            var userDetails = _userService.AddUser(user);
            if (userDetails != null)
                return new Login
                {
                    UserName = user.UserName,
                    token = _tokenGeneration.GenerateToken(new Login { UserName = user.UserName })
                };
            return null;
        }
    }
}
