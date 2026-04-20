import { useEffect, useState } from "react"
import supabase from "../config/SupaBaseClient"

const ViewFiles = () => {
    const [urls, setUrls] = useState([])

    useEffect(() => {
        const getFiles = async () => {
            const { data } = await supabase.storage.from("Images").list("")

            const files = data
                .filter(f => f.name !== ".emptyFolderPlaceholder")
                .map(f =>
                    supabase.storage.from("Images").getPublicUrl(f.name).data.publicUrl
                )

            setUrls(files)
        }

        getFiles()
    }, [])

    return (
        <div className="mt-28 flex flex-wrap gap-5">
            {urls.map((url, i) => (
                <img
                    key={i}
                    src={url}
                    className="w-48 h-48 object-cover rounded-lg shadow-md hover:scale-105 transition"
                />
            ))}
        </div>
    )
}

export default ViewFiles