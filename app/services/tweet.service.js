System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.gettweets = function () {
                    return [
                        {
                            image: "http://lorempixel.com/100/100/people",
                            heading: 'JavaScript',
                            handle: '@freshco_flows',
                            info: 'JavaScript is an awesome language when you learn Angular2!',
                            likeCount: 0
                        },
                        {
                            image: "http://lorempixel.com/100/100/people?1",
                            heading: 'Angular 2.0',
                            handle: '@magic',
                            info: 'Angular 2.0 is the greatest ever!',
                            likeCount: 10
                        },
                        {
                            image: "http://lorempixel.com/100/100/people?2",
                            heading: 'Node JS',
                            handle: '@shawn_conrad',
                            info: 'I wonder if Node JS is better than C#.',
                            likeCount: 4
                        }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map