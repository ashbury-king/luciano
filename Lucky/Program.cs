// See https://aka.ms/new-console-template for more information

using System;
using System.Linq;
using System.Collections.Generic;

List<string> myPicks = new()
{
    "813",
    "619",
    "745",
    "309",
    "207",

    "368",
    "829",
    "802",
    "976",
    "719",

    "990",
    "998",
    "441",
    "486",
    "595",

    "685",
    "238",
    "582",
    "943",
    "728",

    "898",
    "579",
    "759",
    "411",
    "700",

    "534",
    "448",
    "478",
    "202",
    "321",
};

Console.WriteLine(myPicks.Count);

// Group strings by their value and filter groups with more than one element
IEnumerable<string>? duplicates = myPicks
    .GroupBy(x => x)
    .Where(g => g.Count() > 1)
    .Select(g => g.Key);

// Print duplicates
foreach (var duplicate in duplicates)
{
    Console.WriteLine($"Duplicate: {duplicate}");
}

List<Result> results = new()
{
    new Result()
    {
        Straight = "012",
        Fireball = "7",
    },
    new Result()
    {
        Straight = "248",
        Fireball = "4",
    },
    new Result()
    {
        Straight = "229",
        Fireball = "1",
    },
};

List<Result> lastTwentyItems = results.Skip(Math.Max(0, results.Count - 20)).Reverse().ToList();

AreLastTwentyLosers();

void AreLastTwentyLosers()
{
    foreach (Result r in lastTwentyItems)
    {
        if (myPicks.Contains(r.Straight)) { Console.WriteLine(r.Straight + " Straight $250"); }
        // bool myPicksContainStraightWithFireball = false;
        for (int i = 0; i < r.Straight.Length; i += 1)
        {
            string winningStraightWithFireball = string.Concat(r.Straight.AsSpan(0, i), r.Fireball, r.Straight.AsSpan()[(i + 1)..]);
            if (myPicks.Contains(winningStraightWithFireball))
            {
                // myPicksContainStraightWithFireball = true;
                Console.WriteLine(winningStraightWithFireball + " Fireball $100");
                // i = r.Straight.Length;
            }
        }
        // Console.WriteLine(myPicks.Contains(r.Straight) | myPicksContainStraightWithFireball);
        // Console.WriteLine("-------------------------------------------------");
    }
}


class Result
{
    public string Straight { get; set; } = "";
    public string Fireball { get; set; } = "";
}