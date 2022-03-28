import "./stylesheets/side-bar.scss";

import React from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

function Sidebar(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function toggleModal() {
    var toggle = !modalIsOpen;
    setIsOpen(toggle);
  }

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <a href="#none">
            Brand<b>Colors</b>
          </a>
        </div>
        <div className="description">
          The biggest collection of official brand color codes around. Curated
          by
          <a href="https://twitter.com/brandcolors">@brandcolors</a> and
          friends.
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a href="https://github.com/brandcolors/feedback">
                Suggest a Brand
              </a>
            </li>
            <li>
              <a href="#none" onClick={() => toggleModal()}>
                About BrandColors
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button className="btn-model-close" onClick={toggleModal}>
          <GrClose />
        </button>
        <h2>About BrandColors</h2>
        <p>
          BrandColors was created by DesignBombs. The goal was to create a
          helpful reference for the brand color codes that are needed most
          often.
        </p>
        <p>
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
          Tuts+, and over 2 million pageviews. There are now over 600 brands
          with 1600 colors and the collection is always growing.
        </p>
      </Modal>
    </>
  );
}

export default Sidebar;
