using AppSchedule2911.UserCred;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System;

namespace AppSchedule2911.Service
{
    public class TokenGeneration : ITokenGeneration
    {
        private readonly IConfiguration _configuration;
        //Constructor
        public TokenGeneration(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public string GenerateToken(Login userCreds)
        {
            var key = _configuration.GetValue<string>("JwtConfig:Key");
            var keyBytes = Encoding.UTF8.GetBytes(key);
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier,userCreds.UserName)
                }),
                Expires = DateTime.UtcNow.AddMinutes(30),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(keyBytes), SecurityAlgorithms.HmacSha256Signature)



            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
