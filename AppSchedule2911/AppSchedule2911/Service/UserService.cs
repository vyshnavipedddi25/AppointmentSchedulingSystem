using System.Collections.Generic;
using System;
using AppSchedule2911.Data;
using AppSchedule2911.Model;
using System.Linq;

namespace AppSchedule2911.Service
{
    public class UserService : IUserService
    {
        private readonly AppScheduleDbContext _appScheduleDbContext;
        public UserService(AppScheduleDbContext appScheduleDbContext)
        { _appScheduleDbContext = appScheduleDbContext; }
        public Register AddUser(Register user)
        {
            try
            {
                _appScheduleDbContext.Register.Add(user); _appScheduleDbContext.SaveChanges();
                return user;
            }
            catch (Exception) { throw; }

        }

        public List<Register> GetAllUser()
        {
            if (_appScheduleDbContext.Register.Count() > 0)
                return _appScheduleDbContext.Register.ToList();
            return null;
        }
    }

}
