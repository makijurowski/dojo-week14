using System;
using UtilityLibraries;
using Xunit;

namespace StringLibraryTest
{
    public class UnitTest1
    {
        [Fact]
        public void TestStartsWithUpper()
        {
            // Tests expected to return true
            string[] words = { "Alphabet", "Zebra", "ABC", "Αθήνα", "Москва" };
            foreach (var word in words) 
            {
                bool result = StringLibrary.StartsWithUpper(word);
                Assert.True(result);
                string message = String.Format("Expected for '{0}': true; Actual: {1}", word, result);
                Console.WriteLine(message);
            }
        }

        [Fact]
        public void TestDoesNotStartWithUpper()
        {
            // Tests expected to return false
            string[] words = { "alphabet", "zebra", "abc", "αυτοκινητοβιομηχανία", "государство" };
            foreach (var word in words)
            {
                bool result = StringLibrary.StartsWithUpper(word);
                Assert.False(result);
                string message = String.Format("Expected for '{0}': false; Actual: {1}", word, result);
                Console.WriteLine(message);
            }
        }
        /*
        public bool StartsWithUpper(string word)
        {
            char c = word[0];
            bool result = char.IsUpper(word[0]);
            return result;
        }
        */
    }
}
