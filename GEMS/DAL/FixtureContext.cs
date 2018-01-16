using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GEMS.Models;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Core.Objects;

namespace GEMS.DAL
{
    public class FixtureContext : DbContext
    {
        public virtual DbSet<Fixture> Fixtures { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    }
}