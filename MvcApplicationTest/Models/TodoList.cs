using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace MvcApplicationTest.Models
{
    /// <summary>
    /// Todo list entity
    /// </summary>
    public class TodoList
    {
        public TodoList()
        {
            this.ItemTest = new TodoItem();
        }

        public int TodoListId { get; set; }

        [Required]
        public string UserId { get; set; }

        [Required]
        public string Title { get; set; }

        public virtual List<TodoItem> Todos { get; set; }
        public virtual TodoItem ItemTest { get; set; }
    }
}