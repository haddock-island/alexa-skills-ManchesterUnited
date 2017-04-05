'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Space Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "Chelsea football club is one of the 20 clubs that play in the English Premier League.",
    "Chelsea Football Club is an English professional football club based in Fulham, London, that competes in the Premier League. Founded in 1905, the club's home ground since then has been Stamford Bridge.",
    "Chelsea Football Club is nicknamed The Blues or The Pensioners",
    "Chelsea Football Club's owner is Roman Abramovich and Chairman is Bruce Buck",
    "In 2016, Chelsea Football Club were ranked by Forbes magazine as the seventh most valuable football club in the world, at £1.15 billion ($1.66 billion)",
    "Chelsea Football Club have only had one home ground, Stamford Bridge, where they have played since the team's foundation. It was officially opened on 28 April 1877",
    "Chelsea Football Club won their first Premier League Title in the year 1954-55. ",
    "Chelsea Football Club won their first UEFA Champions league Title in the year 2011-12.",
    "Chelsea Football Club won their first UEFA Europa league Title in the year 2012-13.",
    "Chelsea had their first major success in 1955, when they won the league championship. They then won various cup competitions between 1965 and 1996. The club's greatest period of success has come during the last two decades; winning 21 trophies since 1997.",
    "Chelsea's regular kit colours are royal blue shirts and shorts with white socks. The club's crest has been changed several times in attempts to re-brand the club and modernise its image. The current crest, featuring a ceremonial lion rampant regardant holding a staff, is a modification of the one introduced in the early 1950s",
    "On 26 December 1999, Chelsea became the first British side to field an entirely foreign starting line-up (no British or Irish players) in a Premier League match against Southampton",
    "Chelsea (jointly with Arsenal) were the first clubs to play with numbered shirts - on 25 August 1928 in their match against Welsh side Swansea City.",
    "Chelsea's highest appearance-maker is Ron Harris, who played in 795 first-class games for the club between 1961 and 1980",
    "Chelsea hold the record for the highest ever points total for a league season (95) and the fewest goals conceded during a league season (15) - under the management of Jose Mourhino in 2004/05",
    "Chelsea Football club's 21–0 victory over Jeunesse Hautcharage in the UEFA Cup Winners’ Cup in 1971 remains a record in European competition",
    "On 19 May 2007, they became the first team to win the FA Cup at the new Wembley Stadium",
    "Chelsea hold the record for the longest streak of unbeaten matches at home in the English top-flight, which lasted 86 matches from 20 March 2004 to 26 October 2008",
    "Chelsea holds the record for the highest home attendance match - against Arsenal with an attendance of 82,905 on the 2 October 1935",
    "Chelsea's mascot is a lion taken from their club logos and named Stamford The Lion. In July 2005 the costume was stolen from Stamford Bridge",
    "Gus Mears acquired Stamford Bridge stadium in 1904 and wanted to turn it into a football ground. The Chelsea Football Club was founded later (usually it's the other way round).",
    "In the 1997-98 seasons Chelsea played one of the strangest matches in history. It was against Tromso and was 100 miles into the Artic Circle. At one point the match had to be stopped so that snow could be cleared from the pitch!",
    "Chelsea have been the subject of several films about Football. These include 'The Great Game' which featured players from the team (1930) and which included several scenes that were filmed at Stamford Bridge itself. Other films they have been featured in include The Football Factory and Jhoom Barabar Jhoom",
    "Chelsea Football Club hold the record for the Most home wins in a top flight season at 19 games",
    "Chelsea Football Club hold the record for the Most clean sheets in a top flight season: 25 (2004-05)",
    "Chelsea Football Club hold the record for the First English side to travel by aeroplane to a domestic away match 19 April 1957",
    "Chelsea Football Club hold the record for the First First Division side to play a match on a Sunday 27 January 1974",
    "Chelsea Football Club hold the record for the First British side to field an entirely foreign starting line-up (no British or Irish players) 26 December 1999",
    "Chelsea Football Club hold the record for the First team to score over 100 goals in a Premier League season by scoring 103 goals in 2009-10 season",
    "Chelsea Football Club hold the record for the First London club to win the European Cup/UEFA Champions League in the year 2012",
    "Chelsea Football Club hold the record for the First English club to win all three major UEFA competitions that are European Champion Clubs' Cup/UEFA Champions League, UEFA Cup Winners' Cup and UEFA Cup/UEFA Europa League).",
    "Chelsea Football Club hold the record for the First club to hold both the UEFA Champions League and UEFA Europa League titles at the same time",
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random chelsea FC fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];
                
        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a fact about Chelsea football club, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};