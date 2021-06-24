class Activity {
    constructor(member, publishDate, group, content, images = [], video = null, likes) {
        this.member = member;
        this.publishDate = publishDate;
        this.group = group;
        this.content = content;
        this.images = images;
        this.video = video;
        this.likes = likes;
    }
}