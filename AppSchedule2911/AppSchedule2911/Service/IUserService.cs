using AppSchedule2911.Model;
using System.Collections.Generic;

namespace AppSchedule2911.Service
{
    public interface IUserService
    {
        List<Register> GetAllUser();
        Register AddUser(Register user);
    }
}
