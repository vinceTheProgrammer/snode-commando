class Comment extends Activity {
    constructor(member, publishDate, group, content, images = [], video = null, likes, parentActivity) {
        super(member, publishDate, group, content, images, video, likes);
        this.parentActivity = parentActivity;
    }
}