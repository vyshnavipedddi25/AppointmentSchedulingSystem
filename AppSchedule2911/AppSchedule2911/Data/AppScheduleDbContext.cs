using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AppSchedule2911.Model;

namespace AppSchedule2911.Data
{
    public class AppScheduleDbContext : DbContext
    {
        public AppScheduleDbContext (DbContextOptions<AppScheduleDbContext> options)
            : base(options)
        {
        }

        public DbSet<AppSchedule2911.Model.Appointment> Appointment { get; set; }

        public DbSet<AppSchedule2911.Model.Register> Register { get; set; }

        public DbSet<AppSchedule2911.Model.Contact> Contact { get; set; }

        public DbSet<AppSchedule2911.Model.Doctor> Doctor { get; set; }

        public DbSet<AppSchedule2911.Model.Cancel> Cancel { get; set; }

        public DbSet<AppSchedule2911.Model.AdminRegister> AdminRegister { get; set; }
    }
}
