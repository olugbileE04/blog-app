import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg" src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor, sit amet.
                <div className="singlePostEdit">
                <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Lara</b> </span>
                <span className="singlePostDate">Posted: <b>1 hour ago</b></span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex enim magnam facilis deleniti dolor quis unde, dolore alias perferendis blanditiis, illo eveniet voluptatem sed aut sunt quae est odit?
                Temporibus eaque fugiat cupiditate. Aliquam eligendi, distinctio numquam velit blanditiis enim eos doloribus delectus tempora vitae asperiores assumenda id error libero maxime consectetur ut tempore? Rem iure alias quidem dolores.
                Perspiciatis, iste quidem. Nisi totam impedit amet dolorem aspernatur, soluta est odit ducimus omnis autem unde reprehenderit nostrum voluptatem, esse, a suscipit molestiae recusandae commodi porro dolorum deleniti architecto provident.
                Perferendis ab nostrum iste illum architecto excepturi velit tenetur culpa officiis dignissimos corrupti minus vero expedita esse possimus facilis doloribus ex ullam ipsam accusantium, sit hic quae laborum quam. Tenetur!
                Corporis commodi optio veniam dolores amet ea inventore velit. Necessitatibus quam sequi omnis eaque et ad hic? Nulla, dolore quo doloribus omnis quos culpa amet quis praesentium harum. Illum, earum!
                Atque, repellat magnam ipsam sapiente dolores soluta neque culpa cupiditate saepe commodi harum maiores deserunt est voluptatum aperiam nostrum molestias quod labore quo. Pariatur veniam quo ut eos, qui doloremque.
                Officiis in magni iusto modi dolorum fugit maxime iure similique quaerat tempora illum neque dolor praesentium totam eveniet nihil rerum cum, architecto aut voluptas accusamus, et eos cupiditate ratione? Consectetur!
            </p>
        </div>
        </div>
  )
}
