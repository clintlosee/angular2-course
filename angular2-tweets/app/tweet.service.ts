export class TweetService {
    getTweets() {
        return [
            {
                tweet: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                photoUrl: 'http://lorempixel.com/100/100/people',
                photoAlt: 'Profile Pic',
                headingTitle: 'Media heading',
                twitterId: '@twitterName',
                totalLikes: 3,
                liked: true
            },
            {
                tweet: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                photoUrl: 'http://lorempixel.com/100/100/people?1',
                photoAlt: 'Profile Pic 2',
                headingTitle: 'Media heading 2',
                twitterId: '@twitterName2',
                totalLikes: 0,
                liked: false
            }
        ];
    }
}