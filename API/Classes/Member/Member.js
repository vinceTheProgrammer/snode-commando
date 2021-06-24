let memberFetch = require('./Methods/fetch');


class Member {
    constructor(niceName, displayName = null, joinDate, lastActive, bio = null, roles = [], socials = [], stats = [], commentCaption = null) { 
        this.niceName = niceName;
        this.displayName = displayName;
        this.joinDate = joinDate;
        this.lastActive = lastActive;
        this.bio = bio;
        this.roles = roles;
        this.socials = socials;
        this.stats = stats;
        this.commentCaption = commentCaption;
      } 
    fetchActivities(numberOfActivities, filter) {
      return memberFetch.activities(numberOfActivities, filter);
    }
    fetchFriends(numberOfFriends, filter) {
      return memberFetch.friends(numberOfFriends, filter);
    }
    fetchGroups(numberOfGroups, filter) {
      return memberFetch.groups(numberOfGroups, filter);
    }
}