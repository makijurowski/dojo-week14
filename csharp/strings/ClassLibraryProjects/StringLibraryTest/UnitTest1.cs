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
            string[] uppercase_words = { "Alphabet", "Zebra", "ABC", "Αθήνα", "Москва" };
            foreach (var word in uppercase_words) 
            {
                bool result = StringLibrary.StartsWithUpper(word);
                Assert.True(result);
                string message = String.Format("Expected for '{0}': true; Actual: {1}", word, result);
                System.Console.WriteLine(message);
            }
        }

        [Fact]
        public void TestDoesNotStartWithUpper()
        {
            // Tests expected to return false
            string[] lowercase_words = { "alphabet", "zebra", "abc", "αυτοκινητοβιομηχανία", "государство" };
            foreach (var word in lowercase_words)
            {
                bool result = StringLibrary.StartsWithUpper(word);
                Assert.False(result);
                string message = String.Format("Expected for '{0}': false; Actual: {1}", word, result);
                System.Console.WriteLine(message);
            }
        }

        [Fact]
        public void DirectCallWithNullOrEmpty()
        {
            // Test expected to return false
            string[] empty_words = { string.Empty, null };
            foreach (var word in empty_words)
            {
                bool result = StringLibrary.StartsWithUpper(word);
                Assert.False(result);
                string message = String.Format("Expected for '{0}': false; Actual: {1}", word == null ? "<null>" : word, result);
                System.Console.WriteLine(message);
            }
        }
    }
}