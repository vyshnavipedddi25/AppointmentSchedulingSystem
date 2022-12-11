using AppSchedule2911.Model;
using AppSchedule2911.UserCred;

namespace AppSchedule2911.Service
{
    public interface ILoginService
    {
        Login login(Login userCreds);
        Login Register(Register user);
    }
}
