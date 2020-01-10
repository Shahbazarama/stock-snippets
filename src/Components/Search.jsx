import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
export default function Search({ callback }){

  const [search, setSearch] = useState("");
  const fakeData = {
    "response": {
        "status": 200
    },
    "symbol": {
        "id": 3379,
        "symbol": "BB",
        "title": "BlackBerry",
        "aliases": [
            "RIMM",
            "BBRY"
        ],
        "is_following": false,
        "watchlist_count": 35098
    },
    "cursor": {
        "more": true,
        "since": 189792788,
        "max": 189771818
    },
    "messages": [
        {
            "id": 189792788,
            "body": "$BB Frankfurt shuts down IT network following Emotet infection https://t.co/Mo6aYJCdRQ\n\n$BB.CA",
            "created_at": "2020-01-09T22:25:19Z",
            "user": {
                "id": 473512,
                "username": "REALALOY",
                "name": "REALALOY",
                "avatar_url": "https://avatars.stocktwits.com/production/473512/thumb-1494610232.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/473512/thumb-1494610232.png",
                "join_date": "2015-02-24",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 300,
                "following": 67,
                "ideas": 25379,
                "watchlist_stocks_count": 109,
                "like_count": 944,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2095,
                "title": "StockTwits For Android ",
                "url": "http://www.stocktwits.com/mobile"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                },
                {
                    "id": 10577,
                    "symbol": "BB.CA",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIM.CA"
                    ],
                    "is_following": false,
                    "watchlist_count": 1833
                }
            ],
            "links": [
                {
                    "title": "Frankfurt shuts down IT network following Emotet infection | ZDNet",
                    "url": "https://t.co/Mo6aYJCdRQ",
                    "shortened_url": "https://t.co/Mo6aYJCdRQ",
                    "shortened_expanded_url": "zdnet.com/article/frankfurt...",
                    "description": "Frankfurt, one of the largest financial hubs in the world and the home of the European Central Bank, has shut down its IT network this week following an infection with the Emotet malware. Frankfurt is the fourth German entity that shut down its IT network in the past two weeks because of Emotet.",
                    "image": "https://zdnet2.cbsistatic.com/hub/i/r/2019/12/19/8a9b501c-0dc0-463d-b652-500e1cbdaa3c/thumbnail/770x578/087d31732c34be12f7eaac63498587d4/frankfurt.jpg",
                    "created_at": "2020-01-09T22:25:21Z",
                    "video_url": null,
                    "source": {
                        "name": "ZDNet",
                        "website": "https://www.zdnet.com"
                    }
                }
            ],
            "likes": {
                "total": 1,
                "user_ids": [
                    732197
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": {
                    "basic": "Bullish"
                }
            },
            "filters": {
                "day_counts": 37,
                "official_api": true
            }
        },
        {
            "id": 189791873,
            "body": "$BB Damon Hypersport will be be capable of some fairly hyper numbers, including 200 horsepower, a 200 mile-an-hour top speed, and 200 miles of highway range, as well as 300 miles of range in urban riding https://t.co/kHTIZmYDzk\n\n$BB.CA",
            "created_at": "2020-01-09T22:19:14Z",
            "user": {
                "id": 473512,
                "username": "REALALOY",
                "name": "REALALOY",
                "avatar_url": "https://avatars.stocktwits.com/production/473512/thumb-1494610232.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/473512/thumb-1494610232.png",
                "join_date": "2015-02-24",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 300,
                "following": 67,
                "ideas": 25379,
                "watchlist_stocks_count": 109,
                "like_count": 944,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2095,
                "title": "StockTwits For Android ",
                "url": "http://www.stocktwits.com/mobile"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                },
                {
                    "id": 10577,
                    "symbol": "BB.CA",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIM.CA"
                    ],
                    "is_following": false,
                    "watchlist_count": 1833
                }
            ],
            "links": [
                {
                    "title": "CES2020: Damon's Electric Motorcycle Will Have 200-Mile Range, 200mph Speed, Safety Suite",
                    "url": "https://t.co/kHTIZmYDzk",
                    "shortened_url": "https://t.co/kHTIZmYDzk",
                    "shortened_expanded_url": "forbes.com/sites/billrobers...",
                    "description": "Canadian startup Damon Motorcycles is at CES 2020 and says their upcoming Hypersort electric bike will power past the competition with 200 miles of range and 200mph capabilities. An expansive safety tech suite is also along for the ride. You can pre-order yours now.",
                    "image": "https://specials-images.forbesimg.com/imageserve/5e13948e4e291700061a9114/960x0.jpg?fit=scale",
                    "created_at": "2020-01-09T22:19:16Z",
                    "video_url": null,
                    "source": {
                        "name": "Forbes",
                        "website": "https://www.forbes.com"
                    }
                }
            ],
            "likes": {
                "total": 2,
                "user_ids": [
                    1245128,
                    732197
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": {
                    "basic": "Bullish"
                }
            },
            "filters": {
                "day_counts": 37,
                "official_api": true
            }
        },
        {
            "id": 189791563,
            "body": "$BB Some NYC subway riders are accidentally getting double-charged because of Apple Pay https://t.co/KEOaeMoF7X \n\n$BB.CA",
            "created_at": "2020-01-09T22:17:08Z",
            "user": {
                "id": 473512,
                "username": "REALALOY",
                "name": "REALALOY",
                "avatar_url": "https://avatars.stocktwits.com/production/473512/thumb-1494610232.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/473512/thumb-1494610232.png",
                "join_date": "2015-02-24",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 300,
                "following": 67,
                "ideas": 25379,
                "watchlist_stocks_count": 109,
                "like_count": 944,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2095,
                "title": "StockTwits For Android ",
                "url": "http://www.stocktwits.com/mobile"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                },
                {
                    "id": 10577,
                    "symbol": "BB.CA",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIM.CA"
                    ],
                    "is_following": false,
                    "watchlist_count": 1833
                }
            ],
            "links": [
                {
                    "title": "Some NYC subway riders are accidentally getting double-charged because of Apple Pay",
                    "url": "https://t.co/KEOaeMoF7X",
                    "shortened_url": "https://t.co/KEOaeMoF7X",
                    "shortened_expanded_url": "theverge.com/2020/1/9/21059...",
                    "description": "Dozens of subway riders in New York City are being charged extra for their transit rides, and the Metropolitan Transportation Authority suspects that Apple may be partly to blame. The MTA is not explicitly pointing the finger at Apple, but it appears that some riders may be unwittingly putting their iPhones too close to the system's new tap-to-pay OMNY readers while simultaneously swiping their MetroCards at the turnstile.",
                    "image": "https://cdn.vox-cdn.com/thumbor/a9MOL-t6pNjyPQeh0nAJKIvAhfI=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/16304011/akrales_190528_3453_0099.jpg",
                    "created_at": "2020-01-09T22:17:10Z",
                    "video_url": null,
                    "source": {
                        "name": "The Verge",
                        "website": "https://www.theverge.com"
                    }
                }
            ],
            "likes": {
                "total": 2,
                "user_ids": [
                    1245128,
                    732197
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": {
                    "basic": "Bullish"
                }
            },
            "filters": {
                "day_counts": 36,
                "official_api": true
            }
        },
        {
            "id": 189789265,
            "body": "$BB 250k invested and I’m not worried. What i am though is very impatient and frustrated to see same results day day out while our competitors are 1000 miles up the highway in their highly computerized car pulled over on the shoulder with their blinkers on waiting for us with our QNX and CYLANCE now integrated wondering where we are. I think they figured it out , Chen is driving the car and he wont let anyone else drive it . it’s time that someone says thank you John for driving all this time but we have to get to the CES ,so move over if you want us to get to the show on time .",
            "created_at": "2020-01-09T22:03:29Z",
            "user": {
                "id": 2938422,
                "username": "Maronstrike",
                "name": "Sante Cigana",
                "avatar_url": "http://avatars.stocktwits.com/images/default_avatar_thumb.jpg",
                "avatar_url_ssl": "https://s3.amazonaws.com/st-avatars/images/default_avatar_thumb.jpg",
                "join_date": "2019-11-28",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 2,
                "following": 0,
                "ideas": 192,
                "watchlist_stocks_count": 2,
                "like_count": 6,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "likes": {
                "total": 3,
                "user_ids": [
                    2089901,
                    851024,
                    276108
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 12,
                "official_api": true
            }
        },
        {
            "id": 189789203,
            "body": "$BB Still look like a bull pennant to Chow! But hey what does Chow know??? 🤷‍♀️🤷‍♂️🤷‍♀️ Chow only a fictional character!!! 😜😜😜",
            "created_at": "2020-01-09T22:03:00Z",
            "user": {
                "id": 732197,
                "username": "LeslieChow",
                "name": "Ken",
                "avatar_url": "https://avatars.stocktwits.com/production/732197/thumb-1558135216.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/732197/thumb-1558135216.png",
                "join_date": "2016-04-16",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 186,
                "following": 65,
                "ideas": 22594,
                "watchlist_stocks_count": 8,
                "like_count": 130364,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2095,
                "title": "StockTwits For Android ",
                "url": "http://www.stocktwits.com/mobile"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "conversation": {
                "parent_message_id": 189789203,
                "in_reply_to_message_id": null,
                "parent": true,
                "replies": 1
            },
            "likes": {
                "total": 4,
                "user_ids": [
                    458021,
                    499866,
                    232726,
                    1205663
                ]
            },
            "mentioned_users": [],
            "entities": {
                "chart": {
                    "thumb": "https://charts.stocktwits.com/production/small_189789203.",
                    "large": "https://charts.stocktwits.com/production/large_189789203.",
                    "original": "https://charts.stocktwits.com/production/original_189789203.",
                    "url": "https://charts.stocktwits.com/production/original_189789203."
                },
                "sentiment": {
                    "basic": "Bullish"
                }
            },
            "filters": {
                "day_counts": 13,
                "official_api": true
            }
        },
        {
            "id": 189789140,
            "body": "$BB Many of you have been asking how the adjustable ergonomics works. So here it is cut from the official launch video! #bbces2020 #ces2020 https://t.co/51ZScZhuD5\n\n$BB.CA",
            "created_at": "2020-01-09T22:02:35Z",
            "user": {
                "id": 473512,
                "username": "REALALOY",
                "name": "REALALOY",
                "avatar_url": "https://avatars.stocktwits.com/production/473512/thumb-1494610232.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/473512/thumb-1494610232.png",
                "join_date": "2015-02-24",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 300,
                "following": 67,
                "ideas": 25379,
                "watchlist_stocks_count": 109,
                "like_count": 944,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2095,
                "title": "StockTwits For Android ",
                "url": "http://www.stocktwits.com/mobile"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                },
                {
                    "id": 10577,
                    "symbol": "BB.CA",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIM.CA"
                    ],
                    "is_following": false,
                    "watchlist_count": 1833
                }
            ],
            "links": [
                {
                    "title": "Damon Motorcycles on Twitter",
                    "url": "https://t.co/51ZScZhuD5",
                    "shortened_url": "https://t.co/51ZScZhuD5",
                    "shortened_expanded_url": "twitter.com/damonmotorcycle...",
                    "description": "Many of you have been asking how the adjustable ergonomics works. So here it is cut from the official launch video! #bbces2020 #ces2020 https://t.co/51ZScZhuD5",
                    "image": "https://pbs.twimg.com/ext_tw_video_thumb/1215378679192154114/pu/img/c9dUlKkUTVqh48NS.jpg",
                    "created_at": "2020-01-09T22:02:38Z",
                    "video_url": null,
                    "source": {
                        "name": "Twitter",
                        "website": "http://twitter.com"
                    }
                }
            ],
            "likes": {
                "total": 1,
                "user_ids": [
                    732197
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": {
                    "basic": "Bullish"
                }
            },
            "filters": {
                "day_counts": 39,
                "official_api": true
            }
        },
        {
            "id": 189788629,
            "body": "$BB Folks its called consolidating :o) $BB does it at every level. Its not some crazy scheme to hold her &amp; its not Mark Zuck, We&#39;ve been here on every Integer &amp; its only made it stronger. Dont hate, congratulate!",
            "created_at": "2020-01-09T21:59:46Z",
            "user": {
                "id": 543250,
                "username": "GoodNewsBull",
                "name": "Rob C",
                "avatar_url": "https://avatars.stocktwits.com/production/543250/thumb-1572205873.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/543250/thumb-1572205873.png",
                "join_date": "2015-07-01",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 2980,
                "following": 317,
                "ideas": 146741,
                "watchlist_stocks_count": 31,
                "like_count": 33956,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "conversation": {
                "parent_message_id": 189788629,
                "in_reply_to_message_id": null,
                "parent": true,
                "replies": 2
            },
            "likes": {
                "total": 5,
                "user_ids": [
                    495989,
                    499866,
                    458021,
                    232726,
                    133829
                ]
            },
            "reshares": {
                "reshared_count": 1,
                "user_ids": [
                    2248248
                ]
            },
            "mentioned_users": [],
            "entities": {
                "chart": {
                    "thumb": "https://charts.stocktwits.com/production/small_189788629.gif",
                    "large": "https://charts.stocktwits.com/production/large_189788629.gif",
                    "original": "https://charts.stocktwits.com/production/original_189788629.gif",
                    "url": "https://charts.stocktwits.com/production/original_189788629.gif"
                },
                "sentiment": null
            },
            "filters": {
                "day_counts": 74,
                "official_api": true
            }
        },
        {
            "id": 189788523,
            "body": "$BB this place an echo chamber",
            "created_at": "2020-01-09T21:59:00Z",
            "user": {
                "id": 2038101,
                "username": "r8risk",
                "name": "r8risk",
                "avatar_url": "https://avatars.stocktwits.com/production/2038101/thumb-1567520921.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/2038101/thumb-1567520921.png",
                "join_date": "2019-04-26",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 10,
                "following": 127,
                "ideas": 1464,
                "watchlist_stocks_count": 17,
                "like_count": 4941,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2095,
                "title": "StockTwits For Android ",
                "url": "http://www.stocktwits.com/mobile"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 13,
                "official_api": true
            }
        },
        {
            "id": 189788127,
            "body": "$BB https://finance.yahoo.com/news/microsofts-surging-cloud-business-azure-should-terrify-amazon-dan-ives-180606346.html",
            "created_at": "2020-01-09T21:56:36Z",
            "user": {
                "id": 658579,
                "username": "nellybb",
                "name": "nelly corfalo",
                "avatar_url": "https://avatars.stocktwits.com/production/658579/thumb-1542470427.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/658579/thumb-1542470427.png",
                "join_date": "2015-12-27",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 21,
                "following": 13,
                "ideas": 1613,
                "watchlist_stocks_count": 8,
                "like_count": 4032,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "links": [
                {
                    "title": "Microsoft's surging cloud business Azure should terrify Amazon: analyst",
                    "url": "https://finance.yahoo.com/news/microsofts-surging-cloud-business-azure-should-terrify-amazon-dan-ives-180606346.html",
                    "shortened_url": "https://finance.yahoo.com/news/microsofts-surging-cloud-business-azure-should-terrify-amazon-dan-ives-180606346.html",
                    "shortened_expanded_url": "finance.yahoo.com/news/micr...",
                    "description": "The steamroller known as the Microsoft Azure Express looks ready to run over Amazon Web Services (AWS) in 2020 and perhaps, beyond. Closely watched tech analyst Dan Ives at Wedbush Securities told clients Thursday he is seeing stronger than expected deal activity for Microsoft's Azure cloud business.",
                    "image": "https://s.yimg.com/uu/api/res/1.2/1c1ihSvxWS7kG6Q_J4MNgw--~B/aD0zNjQ4O3c9NTQ3MjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2020-01/9ce0bbf0-32fd-11ea-8ff7-e7ba226844cb",
                    "created_at": "2020-01-09T21:56:36Z",
                    "video_url": null,
                    "source": {
                        "name": "Yahoo",
                        "website": "https://finance.yahoo.com"
                    }
                }
            ],
            "likes": {
                "total": 2,
                "user_ids": [
                    495989,
                    1205663
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 3,
                "official_api": true
            }
        },
        {
            "id": 189787845,
            "body": "$BB People, you are fighting against computer algorithms that suppress the SP as long as they see easy option money on the table and weak handed bag holders. Once those are exhausted youll see a pop better than orville redenbacher. Want to beat the machine, outthink it!",
            "created_at": "2020-01-09T21:54:52Z",
            "user": {
                "id": 1438040,
                "username": "ScaredShortless",
                "name": "Scared Shortless",
                "avatar_url": "https://avatars.stocktwits.com/production/1438040/thumb-1521730338.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/1438040/thumb-1521730338.png",
                "join_date": "2018-03-09",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 1,
                "following": 1,
                "ideas": 159,
                "watchlist_stocks_count": 0,
                "like_count": 98,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "conversation": {
                "parent_message_id": 189787845,
                "in_reply_to_message_id": null,
                "parent": true,
                "replies": 1
            },
            "likes": {
                "total": 8,
                "user_ids": [
                    1527842,
                    495989,
                    2038101,
                    499866,
                    1135148,
                    333794,
                    1205663,
                    133829
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 11,
                "official_api": true
            }
        },
        {
            "id": 189785015,
            "body": "$CRWD haha even $ZS better than ridiculous old man stock $BB that keeps harassing us because they know they will never win down 60 percent",
            "created_at": "2020-01-09T21:38:45Z",
            "user": {
                "id": 2801634,
                "username": "ThrasherMan",
                "name": "Bob Jones",
                "avatar_url": "https://avatars.stocktwits.com/production/2801634/thumb-1573508960.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/2801634/thumb-1573508960.png",
                "join_date": "2019-09-10",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 3,
                "following": 1,
                "ideas": 492,
                "watchlist_stocks_count": 28,
                "like_count": 188,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 1149,
                "title": "StockTwits for iOS",
                "url": "http://www.stocktwits.com/mobile"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                },
                {
                    "id": 14485,
                    "symbol": "ZS",
                    "title": "Zscaler",
                    "aliases": [],
                    "is_following": false,
                    "watchlist_count": 7372
                },
                {
                    "id": 15271,
                    "symbol": "CRWD",
                    "title": "CrowdStrike Holdings",
                    "aliases": [],
                    "is_following": false,
                    "watchlist_count": 8539
                }
            ],
            "likes": {
                "total": 2,
                "user_ids": [
                    2038101,
                    1803147
                ]
            },
            "reshares": {
                "reshared_count": 1,
                "user_ids": [
                    543250
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 14,
                "official_api": true
            }
        },
        {
            "id": 189780945,
            "body": "$BB Like clock work .... the big purchases show up just before the bell.",
            "created_at": "2020-01-09T21:19:40Z",
            "user": {
                "id": 1247855,
                "username": "StocksandSeeds",
                "name": "Keith Brown",
                "avatar_url": "https://avatars.stocktwits.com/production/1247855/thumb-1538493395.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/1247855/thumb-1538493395.png",
                "join_date": "2017-10-31",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 4,
                "following": 4,
                "ideas": 595,
                "watchlist_stocks_count": 19,
                "like_count": 355,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "likes": {
                "total": 5,
                "user_ids": [
                    458021,
                    732197,
                    1244972,
                    499866,
                    133829
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 2,
                "official_api": true
            }
        },
        {
            "id": 189779349,
            "body": "$BB  Chen is a dinosaur and no one likes him. BB was better off with the Swedish guy, whats his name, Thursten something...anyway, Chen is a disaster and took our money",
            "created_at": "2020-01-09T21:13:13Z",
            "user": {
                "id": 851024,
                "username": "philcalabreze",
                "name": "Phil Calabreze",
                "avatar_url": "https://avatars.stocktwits.com/production/851024/thumb-1513375234.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/851024/thumb-1513375234.png",
                "join_date": "2016-09-30",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 18,
                "following": 60,
                "ideas": 2825,
                "watchlist_stocks_count": 38,
                "like_count": 2203,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "likes": {
                "total": 3,
                "user_ids": [
                    328614,
                    2038101,
                    867257
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 3,
                "official_api": true
            }
        },
        {
            "id": 189778730,
            "body": "$BB when chen took over tesla was worth as much as revenue BB was bringing every year. how times have changed. musk turned it into 100B as Chen turned it 3B. wow",
            "created_at": "2020-01-09T21:11:01Z",
            "user": {
                "id": 2248248,
                "username": "Bagholderzunited",
                "name": "Thomas",
                "avatar_url": "http://avatars.stocktwits.com/images/default_avatar_thumb.jpg",
                "avatar_url_ssl": "https://s3.amazonaws.com/st-avatars/images/default_avatar_thumb.jpg",
                "join_date": "2019-08-08",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 2,
                "following": 3,
                "ideas": 2194,
                "watchlist_stocks_count": 21,
                "like_count": 42,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "likes": {
                "total": 3,
                "user_ids": [
                    851024,
                    2038101,
                    867257
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 52,
                "official_api": true
            }
        },
        {
            "id": 189778434,
            "body": "$BB I&#39;m not looking for a get-rich-quick scheme. I&#39;m looking for the most undervalued equities with the greatest potential to go absolutely parabolic over the next decade. Wayne Gretzky said the reason he was the greatest ever was NOT because he was a better player, but he said he had the ability to anticipate where the puck would end up. John Chen has done the same thing my friends. Cyber/AI/IoT/National security. It&#39;s the secret money recipe IMHO.",
            "created_at": "2020-01-09T21:09:59Z",
            "user": {
                "id": 1213192,
                "username": "I_am_the_Huperetes",
                "name": "I Love Korean BBQ",
                "avatar_url": "https://avatars.stocktwits.com/production/1213192/thumb-1524531947.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/1213192/thumb-1524531947.png",
                "join_date": "2017-10-04",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 82,
                "following": 11,
                "ideas": 7982,
                "watchlist_stocks_count": 26,
                "like_count": 13357,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "conversation": {
                "parent_message_id": 189778434,
                "in_reply_to_message_id": null,
                "parent": true,
                "replies": 1
            },
            "likes": {
                "total": 8,
                "user_ids": [
                    1135148,
                    1527842,
                    2799471,
                    495989,
                    1295813,
                    732197,
                    328225,
                    1148584
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": {
                    "basic": "Bullish"
                }
            },
            "filters": {
                "day_counts": 21,
                "official_api": true
            }
        },
        {
            "id": 189777633,
            "body": "$BB facebook added 13B to their market cap and they supposedly care about Germany app feature shutdown? or 3B market cap BB crap? lol",
            "created_at": "2020-01-09T21:07:06Z",
            "user": {
                "id": 2248248,
                "username": "Bagholderzunited",
                "name": "Thomas",
                "avatar_url": "http://avatars.stocktwits.com/images/default_avatar_thumb.jpg",
                "avatar_url_ssl": "https://s3.amazonaws.com/st-avatars/images/default_avatar_thumb.jpg",
                "join_date": "2019-08-08",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 2,
                "following": 3,
                "ideas": 2194,
                "watchlist_stocks_count": 21,
                "like_count": 42,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "likes": {
                "total": 3,
                "user_ids": [
                    851024,
                    2038101,
                    867257
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 51,
                "official_api": true
            }
        },
        {
            "id": 189776750,
            "body": "$BB nice close",
            "created_at": "2020-01-09T21:04:00Z",
            "user": {
                "id": 214378,
                "username": "CDCWHO",
                "name": "WHO",
                "avatar_url": "https://avatars.stocktwits.com/production/214378/thumb-1379618911.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/214378/thumb-1379618911.png",
                "join_date": "2013-02-12",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 70,
                "following": 81,
                "ideas": 13551,
                "watchlist_stocks_count": 10,
                "like_count": 3901,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35095
                }
            ],
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 8,
                "official_api": true
            }
        },
        {
            "id": 189776739,
            "body": "$BB You guys have to realize the psychology that&#39;s behind this price. This has been solid support / resistance since July 2012. She&#39;ll keep moving, but the psychologists are using this to their advantage to shake the money tree.",
            "created_at": "2020-01-09T21:03:58Z",
            "user": {
                "id": 1213192,
                "username": "I_am_the_Huperetes",
                "name": "I Love Korean BBQ",
                "avatar_url": "https://avatars.stocktwits.com/production/1213192/thumb-1524531947.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/1213192/thumb-1524531947.png",
                "join_date": "2017-10-04",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 82,
                "following": 11,
                "ideas": 7972,
                "watchlist_stocks_count": 26,
                "like_count": 13355,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35095
                }
            ],
            "likes": {
                "total": 5,
                "user_ids": [
                    1135148,
                    732197,
                    1527842,
                    133829,
                    1295813
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": {
                    "basic": "Bullish"
                }
            },
            "filters": {
                "day_counts": 19,
                "official_api": true
            }
        },
        {
            "id": 189775820,
            "body": "$BB so sad. not even 6.66. conspiracy is over clowns",
            "created_at": "2020-01-09T21:00:50Z",
            "user": {
                "id": 2248248,
                "username": "Bagholderzunited",
                "name": "Thomas",
                "avatar_url": "http://avatars.stocktwits.com/images/default_avatar_thumb.jpg",
                "avatar_url_ssl": "https://s3.amazonaws.com/st-avatars/images/default_avatar_thumb.jpg",
                "join_date": "2019-08-08",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 2,
                "following": 3,
                "ideas": 2187,
                "watchlist_stocks_count": 21,
                "like_count": 42,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35095
                }
            ],
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 48,
                "official_api": true
            }
        },
        {
            "id": 189774734,
            "body": "$BB Just bought 50 more shares for 7,000 total.",
            "created_at": "2020-01-09T20:56:58Z",
            "user": {
                "id": 1213192,
                "username": "I_am_the_Huperetes",
                "name": "I Love Korean BBQ",
                "avatar_url": "https://avatars.stocktwits.com/production/1213192/thumb-1524531947.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/1213192/thumb-1524531947.png",
                "join_date": "2017-10-04",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 82,
                "following": 11,
                "ideas": 7982,
                "watchlist_stocks_count": 26,
                "like_count": 13357,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "likes": {
                "total": 9,
                "user_ids": [
                    495989,
                    1362121,
                    1135148,
                    732197,
                    133829,
                    1527842,
                    328225,
                    1051892,
                    803739
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": {
                    "basic": "Bullish"
                }
            },
            "filters": {
                "day_counts": 15,
                "official_api": true
            }
        },
        {
            "id": 189774339,
            "body": "$BB Just bought 150 more, for a total of 6950 Shares.",
            "created_at": "2020-01-09T20:55:35Z",
            "user": {
                "id": 1213192,
                "username": "I_am_the_Huperetes",
                "name": "I Love Korean BBQ",
                "avatar_url": "https://avatars.stocktwits.com/production/1213192/thumb-1524531947.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/1213192/thumb-1524531947.png",
                "join_date": "2017-10-04",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 82,
                "following": 11,
                "ideas": 7972,
                "watchlist_stocks_count": 26,
                "like_count": 13355,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "conversation": {
                "parent_message_id": 189774339,
                "in_reply_to_message_id": null,
                "parent": true,
                "replies": 1
            },
            "likes": {
                "total": 7,
                "user_ids": [
                    867074,
                    495989,
                    1362121,
                    732197,
                    133829,
                    1527842,
                    1051892
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": {
                    "basic": "Bullish"
                }
            },
            "filters": {
                "day_counts": 15,
                "official_api": true
            }
        },
        {
            "id": 189774174,
            "body": "$BB sorry for telling how I feel about options.\nDon&#39;t like it...😁...cheers!",
            "created_at": "2020-01-09T20:54:57Z",
            "user": {
                "id": 867074,
                "username": "bvr",
                "name": "Beaver",
                "avatar_url": "https://avatars.stocktwits.com/production/867074/thumb-1482360370.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/867074/thumb-1482360370.png",
                "join_date": "2016-10-26",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 89,
                "following": 121,
                "ideas": 14236,
                "watchlist_stocks_count": 55,
                "like_count": 12081,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2095,
                "title": "StockTwits For Android ",
                "url": "http://www.stocktwits.com/mobile"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35095
                }
            ],
            "conversation": {
                "parent_message_id": 189774174,
                "in_reply_to_message_id": null,
                "parent": true,
                "replies": 1
            },
            "likes": {
                "total": 5,
                "user_ids": [
                    1157524,
                    602741,
                    1213192,
                    732197,
                    1527842
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 7,
                "official_api": true
            }
        },
        {
            "id": 189773995,
            "body": "$BB just bought 800 more shares. 6800 shares total. On the path to 10,000.",
            "created_at": "2020-01-09T20:54:12Z",
            "user": {
                "id": 1213192,
                "username": "I_am_the_Huperetes",
                "name": "I Love Korean BBQ",
                "avatar_url": "https://avatars.stocktwits.com/production/1213192/thumb-1524531947.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/1213192/thumb-1524531947.png",
                "join_date": "2017-10-04",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 82,
                "following": 11,
                "ideas": 7972,
                "watchlist_stocks_count": 26,
                "like_count": 13356,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "conversation": {
                "parent_message_id": 189773995,
                "in_reply_to_message_id": null,
                "parent": true,
                "replies": 6
            },
            "likes": {
                "total": 10,
                "user_ids": [
                    495989,
                    1383534,
                    867074,
                    602741,
                    1362121,
                    732197,
                    133829,
                    1527842,
                    1051892,
                    1730724
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 14,
                "official_api": true
            }
        },
        {
            "id": 189773915,
            "body": "$BB nice read on trendiness for the uneducated. ( me! Lol).",
            "created_at": "2020-01-09T20:53:54Z",
            "user": {
                "id": 1295813,
                "username": "Dugstr2",
                "name": "Doug schuster",
                "avatar_url": "https://avatars.stocktwits.com/production/1295813/thumb-1526861674.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/1295813/thumb-1526861674.png",
                "join_date": "2017-12-04",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 23,
                "following": 70,
                "ideas": 4914,
                "watchlist_stocks_count": 8,
                "like_count": 2883,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35095
                }
            ],
            "likes": {
                "total": 1,
                "user_ids": [
                    732197
                ]
            },
            "mentioned_users": [],
            "entities": {
                "chart": {
                    "thumb": "https://charts.stocktwits.com/production/small_189773915.png",
                    "large": "https://charts.stocktwits.com/production/large_189773915.png",
                    "original": "https://charts.stocktwits.com/production/original_189773915.png",
                    "url": "https://charts.stocktwits.com/production/original_189773915.png"
                },
                "sentiment": null
            },
            "filters": {
                "day_counts": 10,
                "official_api": true
            }
        },
        {
            "id": 189773752,
            "body": "$BB have a better chance going higher after next week&#39;s option mountain expires.\nMy speculation.",
            "created_at": "2020-01-09T20:53:16Z",
            "user": {
                "id": 867074,
                "username": "bvr",
                "name": "Beaver",
                "avatar_url": "https://avatars.stocktwits.com/production/867074/thumb-1482360370.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/867074/thumb-1482360370.png",
                "join_date": "2016-10-26",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 89,
                "following": 121,
                "ideas": 14243,
                "watchlist_stocks_count": 55,
                "like_count": 12081,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2095,
                "title": "StockTwits For Android ",
                "url": "http://www.stocktwits.com/mobile"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "conversation": {
                "parent_message_id": 189773752,
                "in_reply_to_message_id": null,
                "parent": true,
                "replies": 1
            },
            "likes": {
                "total": 2,
                "user_ids": [
                    732197,
                    1438040
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 6,
                "official_api": true
            }
        },
        {
            "id": 189773147,
            "body": "$BB CRWD 56... BB should be 10x",
            "created_at": "2020-01-09T20:50:52Z",
            "user": {
                "id": 214378,
                "username": "CDCWHO",
                "name": "WHO",
                "avatar_url": "https://avatars.stocktwits.com/production/214378/thumb-1379618911.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/214378/thumb-1379618911.png",
                "join_date": "2013-02-12",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 70,
                "following": 81,
                "ideas": 13551,
                "watchlist_stocks_count": 10,
                "like_count": 3901,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35095
                }
            ],
            "likes": {
                "total": 1,
                "user_ids": [
                    133829
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 5,
                "official_api": true
            }
        },
        {
            "id": 189772453,
            "body": "$BB Was I ever wrong in these two? Absolutely $AAPL https://stocktwits.com/B1B/message/149580588",
            "created_at": "2020-01-09T20:48:12Z",
            "user": {
                "id": 1245128,
                "username": "B1B",
                "name": "John Bair",
                "avatar_url": "https://avatars.stocktwits.com/production/1245128/thumb-1553345959.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/1245128/thumb-1553345959.png",
                "join_date": "2017-10-29",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 277,
                "following": 250,
                "ideas": 26527,
                "watchlist_stocks_count": 300,
                "like_count": 24883,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 1149,
                "title": "StockTwits for iOS",
                "url": "http://www.stocktwits.com/mobile"
            },
            "symbols": [
                {
                    "id": 686,
                    "symbol": "AAPL",
                    "title": "Apple Inc.",
                    "aliases": [],
                    "is_following": false,
                    "watchlist_count": 337224
                },
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35095
                }
            ],
            "links": [
                {
                    "title": "John Bair (@B1B) | Stocktwits",
                    "url": "https://stocktwits.com/B1B/message/149580588",
                    "shortened_url": "https://stocktwits.com/B1B/message/149580588",
                    "shortened_expanded_url": "stocktwits.com/B1B/message/...",
                    "description": "Get The Stocktwits Daily Rip ©2019 StockTwits, Inc. All rights reserved. Market Data by Xignite and BATS BZX Real-Time Price Securities products and services offered to self-directed investors through ST Invest, LLC. Member FINRA / SIPC. ST Invest is a wholly owned subsidiary of StockTwits, Inc.Investing in securities products involves risk, including possible loss of principal.",
                    "image": "https://avatars.stocktwits.com/production/1245128/large-1553345959.png",
                    "created_at": "2020-01-09T20:48:13Z",
                    "video_url": null,
                    "source": {
                        "name": "Stocktwits",
                        "website": "https://stocktwits.com"
                    }
                }
            ],
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 32,
                "official_api": true
            }
        },
        {
            "id": 189772323,
            "body": "$BB Redberry redberry --always always redberry.",
            "created_at": "2020-01-09T20:47:44Z",
            "user": {
                "id": 1338349,
                "username": "securitynmotion",
                "name": "securitynmotion",
                "avatar_url": "https://avatars.stocktwits.com/production/1338349/thumb-1514473332.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/1338349/thumb-1514473332.png",
                "join_date": "2017-12-28",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 44,
                "following": 43,
                "ideas": 13522,
                "watchlist_stocks_count": 34,
                "like_count": 982,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35095
                }
            ],
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 27,
                "official_api": true
            }
        },
        {
            "id": 189771958,
            "body": "$BB board members need to be removed before goes to 3$",
            "created_at": "2020-01-09T20:46:25Z",
            "user": {
                "id": 1021960,
                "username": "lisa54",
                "name": "lisa",
                "avatar_url": "http://avatars.stocktwits.com/images/default_avatar_thumb.jpg",
                "avatar_url_ssl": "https://s3.amazonaws.com/st-avatars/images/default_avatar_thumb.jpg",
                "join_date": "2017-04-07",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 14,
                "following": 63,
                "ideas": 2019,
                "watchlist_stocks_count": 5,
                "like_count": 5467,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 1149,
                "title": "StockTwits for iOS",
                "url": "http://www.stocktwits.com/mobile"
            },
            "symbols": [
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35098
                }
            ],
            "likes": {
                "total": 1,
                "user_ids": [
                    867257
                ]
            },
            "mentioned_users": [],
            "entities": {
                "sentiment": {
                    "basic": "Bearish"
                }
            },
            "filters": {
                "day_counts": 1,
                "official_api": true
            }
        },
        {
            "id": 189771818,
            "body": "$AAPL  $BB $FB $AMZN definition of a bubble https://www.zerohedge.com/markets/77-cfos-say-stock-market-overvalued-even-they-order-record-stock-buybacks",
            "created_at": "2020-01-09T20:45:56Z",
            "user": {
                "id": 1711636,
                "username": "Smoother",
                "name": "Mr Smoother",
                "avatar_url": "https://avatars.stocktwits.com/production/1711636/thumb-1542199560.png",
                "avatar_url_ssl": "https://avatars.stocktwits.com/production/1711636/thumb-1542199560.png",
                "join_date": "2018-11-13",
                "official": false,
                "identity": "User",
                "classification": [],
                "followers": 20,
                "following": 58,
                "ideas": 2004,
                "watchlist_stocks_count": 17,
                "like_count": 370,
                "plus_tier": "",
                "premium_room": ""
            },
            "source": {
                "id": 2269,
                "title": "StockTwits Web",
                "url": "https://stocktwits.com"
            },
            "symbols": [
                {
                    "id": 686,
                    "symbol": "AAPL",
                    "title": "Apple Inc.",
                    "aliases": [],
                    "is_following": false,
                    "watchlist_count": 337224
                },
                {
                    "id": 864,
                    "symbol": "AMZN",
                    "title": "Amazon.com Inc.",
                    "aliases": [],
                    "is_following": false,
                    "watchlist_count": 235822
                },
                {
                    "id": 3379,
                    "symbol": "BB",
                    "title": "BlackBerry",
                    "aliases": [
                        "RIMM",
                        "BBRY"
                    ],
                    "is_following": false,
                    "watchlist_count": 35095
                },
                {
                    "id": 7871,
                    "symbol": "FB",
                    "title": "Facebook",
                    "aliases": [
                        "FBOOK"
                    ],
                    "is_following": false,
                    "watchlist_count": 239059
                }
            ],
            "links": [
                {
                    "title": "77% Of CFOs Say Stock Market Is Overvalued Even As They Order Record Stock Buybacks",
                    "url": "https://www.zerohedge.com/markets/77-cfos-say-stock-market-overvalued-even-they-order-record-stock-buybacks",
                    "shortened_url": "https://www.zerohedge.com/markets/77-cfos-say-stock-market-overvalued-even-they-order-record-stock-buybacks",
                    "shortened_expanded_url": "zerohedge.com/markets/77-cf...",
                    "description": "Over the past two years, a dramatic, profound divergence emerged between consumer and CEO (or corporate professional) confidence, with the former soaring to record highs while the latter tumbling to financial crisis levels.",
                    "image": "https://zh-prod-1cc738ca-7d3b-4a72-b792-20bd8d8fa069.storage.googleapis.com/s3fs-public/inline-images/CEO%20conf%20vs%20ISM.jpg",
                    "created_at": "2020-01-09T20:45:58Z",
                    "video_url": null,
                    "source": {
                        "name": "Zero Hedge",
                        "website": "https://www.zerohedge.com"
                    }
                }
            ],
            "mentioned_users": [],
            "entities": {
                "sentiment": null
            },
            "filters": {
                "day_counts": 10,
                "official_api": true
            }
        }
    ]
}
  const handleSubmit = (evt) => {
      evt.preventDefault();
      // console.log(fakeData)
      // callback(fakeData.messages)

      const rawSearch = new FormData(evt.target);

      // separate stock terms from search form
      const splitSearch = rawSearch.get('search').replace(/\s/g,'').split(',');

      // call api for each search term
      const allTweets = []

      Promise.all(splitSearch.map(stock => fetch(`https://cors-anywhere.herokuapp.com/https://api.stocktwits.com/api/2/streams/symbol/${stock}.json`))).then(responses =>
        Promise.all(responses.map(res => res.json()))
      ).then(data => {
        console.log(data)
        if(data[0].response.status == 404){
        alert('Invalid search term, try GOOG or BB')
      } else {

        data.forEach(search => {
          search.messages.forEach(message => {
            allTweets.push(message)
          })
      })
      callback(allTweets)
      }
      })
  }

  return (
    <Form inline onSubmit={handleSubmit}>
      <Form.Control name="search" type="text" placeholder="search for some stocks" className="mr-sm-2" onChange={e => setSearch(e.target.value)}/>
      <Button type="submit" variant="outline-info" className="mr-sm-2">Search</Button>
    </Form>
  )
}
