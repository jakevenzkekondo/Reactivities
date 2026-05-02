using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;

namespace API.DTOs;

public class RegisterDto
{
    [Required]
    public string DisplayName { get; set; } = "";
    
    [Required]
    [EmailAddress]
    public string Email { get; set; } = "";

    public string Password { get; set; } = "";
}
