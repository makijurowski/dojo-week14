using System;
using static System.Console;
using Library;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine($"The answer is {new Thing().Get(19, 23)}");
        }
    }
}