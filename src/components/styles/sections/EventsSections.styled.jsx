import styled from "styled-components";

export const EventsSectionStyled = styled.section`
  width: 100%;

  height: 90vh;
`;

export const EventsSectionContainer = styled.div`
  width: 86%;
  margin: 0 auto;
`;
export const EventsSectionTitle = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: 300;
  }
`;

export const EventsSectionContent = styled.div`
  display: grid;
  grid-template-columns:2fr 1fr;
  gap: 30px;
 
`;

export const EventsSectionLeft = styled.div`
  width: 100%;
   


.listcontainer {
  max-height: 320px;      /* limit height to create vertical scroll */
  overflow-y: auto;       /* enable vertical scrolling */
  padding-right: 10px;    /* space for scrollbar */
  border-right: 2px solid #ddd;  /* subtle separation */
  background: white;
}

/* Style scroll bar for modern browsers */
.listcontainer::-webkit-scrollbar {
  width: 8px;
}

.listcontainer::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 4px;
}

.listcontainer::-webkit-scrollbar-thumb {
  background-color: #0a3d62;
  border-radius: 4px;
}

/* Each event item */
.listcontainer ul li {
  margin-bottom: 24px;
  list-style-type: none;
  position: relative;
  padding-left: 20px;
  padding: 12px 15px;
  /* border-radius: 8px; */
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  list-style: none;
  border-bottom: 1px solid red;
}

/* Bullet before description */
.listcontainer ul li::before {
  content: "•";
  position: absolute;
  left: 10px;
  top: 1.3em;
  color: #0a3d62;
  font-weight: bold;
  font-size: 1.2rem;
}

/* Date style */
.event-date {
  font-weight: 700;
  color: #0a3d62;
  margin-bottom: 6px;
  display: block;
}

/* Hover effect */
/* .listcontainer ul li:hover {
  background-color: #9b9387;
  color: #c05b2c;
  box-shadow: 0 4px 12px rgba(243, 156, 18, 0.5);
  transform: scale(1.02);
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
} */

/* On hover, also keep the bullet white */
/* .listcontainer ul li:hover::before {
  color: white;
} */



`;
export const EventsSectionRight = styled.div`
  width: 100%;
  





  

`;
