using System;
using Xunit;

namespace StringLibraryTest
{
    public class UnitTest1
    {
        [Fact]
        public static void True(bool? condition, string userMessage)
        {
            if (!condition.HasValue || !condition.GetValueOrDefault())
                throw new TrueException(userMessage, condition);
        }

        [Fact]
        public static void False(bool? condition, string userMessage)
        {
            if (!condition.HasValue || condition.GetValueOrDefault())
                throw new FalseException(userMessage, condition);
        }
    }
}
