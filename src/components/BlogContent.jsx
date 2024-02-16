import React from 'react';
import { useParams } from 'react-router-dom';

const BlogContent = ({ blogs }) => {
    const { id } = useParams();

    const blog = blogs.data.find(blog => blog.id.toString() === id) || {};
    const blogContent = blog.attributes?.blogContent || [];

    const renderContent = (content) => {
        return content.map((item, index) => {
            switch (item.type) {
                case 'paragraph':
                    return (
                        <p key={index} style={{ fontWeight: item.children[0]?.bold ? 'bold' : 'normal' }}>
                            {item.children.map((child, childIndex) => <span key={childIndex}>{child.text}</span>)}
                        </p>
                    );
                default:
                    return null;
            }
        });
    };

    return (
        <div className='w-full pb-10 bg-[#f9f9f9]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1 md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
                    <div className='col-span-2'>
                        <img className='h-56 w-full object-cover' src={blog.attributes?.coverImg?.data?.[0]?.attributes?.url ? `http://localhost:1337${blog.attributes.coverImg.data[0].attributes.url}` : 'defaultImageURLHere'} alt="Blog Cover"/>
                        <h1 className='font-bold text-2xl my-1 pt-5'>{blog.attributes?.blogTitle}</h1>
                        <div className='pt-5'>
                            {renderContent(blogContent)}
                        </div>
                    </div>
                    <div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[250px]'>
                        <div>
                            <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={blog.attributes?.authorImg?.data?.attributes?.url ? `http://localhost:1337${blog.attributes.authorImg.data.attributes.url}` : 'defaultAuthorImageURLHere'} alt="Author"/>
                            <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.attributes?.authorName}</h1>
                            <p className='text-center text-gray-900 font-medium'>{blog.attributes?.authorDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogContent;
