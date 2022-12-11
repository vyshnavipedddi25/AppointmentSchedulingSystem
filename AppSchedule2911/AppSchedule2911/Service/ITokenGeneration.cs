using AppSchedule2911.UserCred;

namespace AppSchedule2911.Service
{
    public interface ITokenGeneration
    {
        public string GenerateToken(Login userCreds);
    }
}
