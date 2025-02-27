import { useState } from "react";
import transformImg1 from "../assets/images/transformation-4.png";
import transformImg2 from "../assets/images/transformImg-1(2).png";
import prevArrow from "../assets/images/prevArrow.png";
import nextArrow from "../assets/images/nextArrow.png";
const imageData = [
    { id: 1, title: "John Doe", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.", img: transformImg1 },
    { id: 2, title: "Mountain Peak", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.", img: transformImg2 },
    { id: 3, title: "City Lights", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.", img: transformImg1 },
    { id: 4, title: "Forest Path", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.", img:transformImg2 },
    { id: 5, title: "Desert Dunes", description: "Golden sand dunes under the sun.", img: "https://via.placeholder.com/200/FFD700" },
    { id: 6, title: "Lake Reflections", description: "A peaceful lake reflecting the sky.", img: "https://via.placeholder.com/200/FF4500" },
    { id: 7, title: "Autumn Leaves", description: "Trees covered in autumn colors.", img: "https://via.placeholder.com/200/8A2BE2" },
    { id: 8, title: "Waterfall", description: "Majestic waterfall in the mountains.", img: "https://via.placeholder.com/200/20B2AA" },
    { id: 9, title: "Starry Night", description: "Clear night sky filled with stars.", img: "https://via.placeholder.com/200/32CD32" },
    { id: 10, title: "Ocean Waves", description: "Waves crashing against the shore.", img: "https://via.placeholder.com/200/DC143C" }
  ];

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 4;

    const totalPages = Math.ceil(imageData.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const currentCards = imageData.slice(startIndex, startIndex + cardsPerPage);

    const getPaginationNumbers = () => {
        const pageNumbers = [];
        if (totalPages <= 5) {
          for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
          }
        } else {
          if (currentPage <= 3) {
            pageNumbers.push(1, 2, 3, "...", totalPages);
          } else if (currentPage > 3 && currentPage < totalPages - 2) {
            pageNumbers.push(1, "...", currentPage, "...", totalPages);
          } else {
            pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
          }
        }
        return pageNumbers;
      };



  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
    <h2 className="text-[20px] font-bold text-[#727272]">Transformation</h2>
    <h4 className="text-[54px] font-bold text-[#272727] mt-[20px]">Transformations that Inspire</h4>
    <p className="text-[#727272] text-[16px] font-medium">Every transformation is a story of resilience, health, and empowerment. Our focus on health-first transformations ensures that our members are not only achieving their fitness goals but also experience an enhanced quality life.</p>
    {/* Card Grid */}
    <div  style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px", justifyContent: "center", maxWidth: "900px", margin: "30px auto" }}>
      {currentCards.map((card) => (
        <div key={card.id}>
        <div className='flex justify-between items-center bg-black w-full p-4 rounded-tl-[10px] rounded-tr-[10px]'>
            <p className='text-[#fff] text-[14px] w-1/2 text-center'>Before</p>
            <p className='text-[#fff] text-[14px] w-1/2 text-center'>After</p>
        </div>
          <img src={card.img} alt={card.title} style={{ width: "100%",height:"300px" }} />
          <div className="bg-[#272727] p-[20px]  rounded-bl-[10px] rounded-br-[10px]">
            <p className="text-center font-medium text-[#D7D7D7]">{card.description}</p>
            <h3 className="text-center font-bold text-[#F7F7F7]">{card.title}</h3>
          </div>
        </div>
      ))}
    </div>

    <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="bg-[#136bd0] p-3 w-[35px] h-[35px] rounded-full mr-3">
          <img src={prevArrow} alt="" />
        </button>

        {getPaginationNumbers().map((num, index) => (
          <button
            key={index}
            onClick={() => typeof num === "number" && setCurrentPage(num)}
            style={{
                width:"35px",
                height:"35px",
              padding: "5px 10px",
              backgroundColor: num === currentPage ? "blue" : "white",
              color: num === currentPage ? "white" : "black",
              border: "1px solid #ccc",
              borderRadius: "50px",
              cursor: typeof num === "number" ? "pointer" : "default",
              fontWeight: num === currentPage ? "bold" : "normal"
            }}
            disabled={num === "..."}
          >
            {num}
          </button>
        ))}

        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className="bg-[#136bd0] p-3 w-[35px] h-[35px] rounded-full ml-3">
             <img src={nextArrow} alt="" />
        </button>
      </div>

  </div>
  );
};

export default Pagination;
