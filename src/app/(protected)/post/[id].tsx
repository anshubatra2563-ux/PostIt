import { View, Text, FlatList } from "react-native"
import { useLocalSearchParams } from "expo-router"
import posts from "../../../../assets/data/posts.json"
import PostListItem from "../../../components/PostListItem"
import comments from "../../../../assets/data/comments.json"
import CommentListItem from "../../../components/CommentListItem"

export default function DetailedPost() {
    const { id } = useLocalSearchParams()
    const detailedPost = posts.find((post) => post.id === id)

    const postComments = comments.filter((comment) => comment.post_id === "post-1")
    console.log(postComments)

    if(!detailedPost) {
        return <Text>Post Not Found</Text>
    }

    return (
        <View>
            
            <FlatList 
                data={postComments}
                renderItem={({ item }) => (
                    <CommentListItem comment={item}/>
                )}
                ListHeaderComponent={
                    <PostListItem post={detailedPost} isDetailedPost />
                }
            />
        </View>
    )
}

