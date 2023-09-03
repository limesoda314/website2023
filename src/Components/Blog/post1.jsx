import {Typography} from "@material-tailwind/react";

export default function Post1() {
    
    const postData = [{
        href: 'post1',
        title: 'Post 1',
        date: '2023-08-26 00:00:00', 
        author: 'Ann Miyaguchi',
        tags: ["tag1", "tag2"], 
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    }]

    document.title = 'post1'; 

    const formatTags = () => {
        const tagList = [];
  
        postData[0].tags.forEach((tag) => {

            tagList.push(<button className="bg-green-300 text-green-950 rounded-md m-2 px-2 py-1">#{tag}</button>);
    
        });
  
        return tagList;
    }

    return (
   
    <div className="h-full w-full justify-center">
        <Typography variant="h5" color="blue-gray" className="py-4">
           {postData[0].title}
        </Typography>
        <Typography variant="h2" color="blue-gray">
            {postData[0].author} • {postData[0].date} 
            <div>
                {formatTags()}
            </div>
        </Typography>
        
        <article className="container mx-auto object-center shadow-lg p-5 m-10 text-left prose prose-lg ">
            <Typography>
                <p>
                    Later I need to figure out how to increase the width just slightly for the article. I also need to find out how it works for markdown to html and how to style the generated html. In the blog page, I should have the menu automatically be closed for when the screen is smaller. Might be a bit more challenging to figure that out. Also need to implement a search feature where the user can type in the title and the posts will show up. Before that I need to organize my existing code so it looks a lot cleaner.   
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac mauris sodales, pellentesque odio at, convallis dui. Proin non dui ut tortor dictum venenatis. Sed sed iaculis magna. In maximus metus in nibh fringilla, dictum laoreet felis cursus. Praesent ullamcorper condimentum neque sed mollis. Etiam molestie efficitur mi sed gravida. Praesent a nisi est. Vestibulum eros sapien, pellentesque id enim tempus, pretium dictum nulla. Pellentesque et massa at purus vestibulum sagittis. Fusce in blandit dui. Etiam scelerisque nisl vitae elit aliquam, id feugiat lorem volutpat. Aliquam ac lacinia leo. Donec a nibh leo. Pellentesque laoreet rutrum urna a imperdiet.
                </p>
                <p>
                    <b>Phasellus</b> in nisl ut lorem consectetur aliquet pretium a libero. Nulla facilisi. Mauris et ultricies quam. Donec mollis metus cursus quam congue interdum. Quisque ut massa risus. Nunc non ante vehicula, consequat augue sed, ultrices eros. Phasellus vel mollis ante, non feugiat nibh. Ut tristique tincidunt ex, suscipit vestibulum nunc sagittis non. Sed tincidunt sodales magna, quis laoreet mauris pulvinar et. Vivamus imperdiet massa a eros faucibus, ac dapibus urna convallis.
                </p>
                <p>
                    Aenean eget placerat mauris. Vestibulum feugiat risus vel erat pulvinar commodo. Aliquam ac lectus et tellus tempus finibus ut sed est. Vivamus aliquet dictum lorem eu dapibus. Sed ultrices justo metus, sed imperdiet lectus pretium vel. Cras nulla est, cursus vel turpis eget, euismod faucibus mi. In pharetra fringilla scelerisque. Aenean pellentesque nisl at urna blandit auctor. Suspendisse finibus maximus eros quis hendrerit. Mauris ligula nisi, tempor blandit quam non, fringilla dignissim quam. Fusce eu ipsum velit. Vivamus condimentum vitae augue quis gravida. Nulla at viverra quam, ac auctor lacus. Etiam lectus nisi, eleifend consequat sodales quis, tristique non ex. Ut eleifend accumsan metus eget convallis.
                </p>
                <p>
                    Mauris rhoncus egestas hendrerit. Duis euismod nisi in ante fermentum, a lacinia augue finibus. Fusce in congue lorem. Phasellus bibendum justo tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ut hendrerit eros. Nullam in sapien velit. Cras augue orci, feugiat id magna suscipit, tempor tempus lorem. Sed placerat eleifend nunc et finibus. Donec massa mi, facilisis in malesuada ac, gravida id leo. Praesent sollicitudin non mi id mattis.
                </p>
                <p>
                    Sed in tincidunt nisi, a imperdiet sapien. Integer eget ornare tortor. Ut sodales pharetra mi, quis sodales ex accumsan vulputate. Aliquam congue lacus ut commodo convallis. Sed dapibus velit nec posuere ornare. Quisque varius ultrices nisi vel semper. Maecenas molestie vitae dolor id convallis. Donec eleifend suscipit lectus, quis vulputate leo ultricies sed. 
                </p>     
            </Typography>
           
        </article>
        
            
       
                
            
    </div>); 
    
};