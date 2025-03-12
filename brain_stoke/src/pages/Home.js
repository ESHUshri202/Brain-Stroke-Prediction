import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex justify-between items-center p-14 m-12 h-[66vh]">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-bold">Welcome To Medico</h1>
          <h3 className="text-5xl font-bold bg-gradient-to-l from-[#c0a795] via-[#a50202] to-[#011272] inline-block text-transparent bg-clip-text">
            Brain Stoker
          </h3>
        </div>
        <div className="relative right-0 p-2">
          <div>
            <img
              className="inset-0 z-1 rounded-xl shadow-2xl "
              src="https://media.gettyimages.com/id/1015900216/vector/stroke-illustration.jpg?b=1&s=170667a&w=0&k=20&c=7byCdpm4P6VyLWxeqURyTR-o8-V8YR7htCVrlD-3MqE="
              alt=""
            />
          </div>
          <div>
            <img
              className="absolute left-[75px] top-16 z-2 rounded-xl shadow-2xl "
              src="https://th.bing.com/th/id/OIP.2ZZXLAQ0RLlZaZnEBZC5xQHaE7?w=626&h=417&rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Gallery Section of Medical Science */}
      <div>
        <h1 className="text-5xl font-bold italic text-center p-12">Gallery</h1>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center "
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                alt="gallery-photo"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center "
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="gallery-photo"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center "
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                alt="gallery-photo"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                alt="gallery-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
