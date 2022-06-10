import Projects from "./Projects";
import "./content.css";
import pic404 from "./img/404.jpg";
import picAES from "./img/AES.jpg";
import picEDU from "./img/EDU.jpg";
import picSTU from "./img/STU.jpg";
import picTodo from "./img/todo.jpg";
import picLibrary from "./img/library-reservation.jpg";

function Content() {
  const projectsList = [
    {
      url: "https://ikrypton.cn/404/",
      image: pic404,
      title: "404 Page",
      id: "001",
    },
    {
      url: "https://ikrypton.cn/AES/",
      image: picAES,
      title: "AES Paper Wallet",
      id: "002",
    },
    {
      url: "https://github.com/PayneCen/edu_manage",
      image: picEDU,
      title: "Educational System",
      id: "003",
    },
    {
      url: "https://github.com/PayneCen/stu_manage",
      image: picSTU,
      title: "Student System",
      id: "004",
    },
    {
      url: "https://ikrypton.cn/todo/",
      image: picTodo,
      title: "Todo List",
      id: "005",
    },
    {
      url: "https://github.com/PayneCen/library-reservation",
      image: picLibrary,
      title: "Library Reservation",
      id: "006",
    },
  ];
  return (
    <div className="content">
      <section id="projects" className="projects-section">
        <h2 className="projects-section-header">项目Demo:</h2>
        <div className="projects-grid">
          {projectsList.map((item) => (
            <Projects myproject={item} key={item.id} />
          ))}
        </div>
        <a
          href="https://codepen.io/paynecen/"
          className="btn btn-show-all"
          target="_blank"
        >
          Get More<i class="fas fa-chevron-right"></i>
        </a>
      </section>
    </div>
  );
}

export default Content;
