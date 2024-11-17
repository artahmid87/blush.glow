
 const Youtube = () => {
    return (
        <>
           <div className="container mx-auto px-4 max-w-7xl w-[100%] py-[20px] mt-[50px] flex justify-center items-center">
           <iframe className=" w-[100%] h-[500px] rounded-xl" src="https://www.youtube.com/embed/3pjl4cacA3M?si=kKyb-U1V5dw5XrM7" 
           title="YouTube video player"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            >
                
            </iframe>
           </div>
        </>
    )
}

export default Youtube