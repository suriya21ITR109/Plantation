import React from 'react';

const containerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
};

const contentStyles = {
  backgroundColor: '#e8f5e8', // Change the background color
  padding: '20px',
  border: '1px solid #bcd9bc', // Change the border color
  borderRadius: '10px',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
  width: '90%',
  textAlign: 'center',
};

const headingStyles = {
  fontSize: '24px',
  marginBottom: '20px',
  color: '#377c37',
};

const paragraphStyles = {
  fontSize: '18px',
  lineHeight: '1.6',
  marginBottom: '20px',
  color: '#333', // Change the text color
};

const imageStyles = {
  maxWidth: '600px',
};
const imageGalleryStyles = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginBottom: '20px',
};

const galleryImageStyles = {
  flex: '0 0 calc(33.33% - 10px)',
  maxWidth: '300px',
  marginBottom: '10px',
  marginRight: '10px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
};

const loveNatureStyles = {
  fontSize: '24px',
  color: '#377c37',
  marginTop: '20px',
  marginBottom: '10px',
};

function AboutUs() {
  return (
    <div style={containerStyles}>
      <div style={contentStyles}>
        <h2 style={headingStyles}>About Our Plant E-commerce</h2>
        <p style={paragraphStyles}>
          Welcome to our plant e-commerce platform! We're passionate about helping you grow healthy and beautiful plants in your home and garden.
        </p>
        <p style={paragraphStyles}>
          We provide a wide range of plant species, gardening supplies, and expert advice to ensure your success in plant cultivation. Whether you're a seasoned gardener or a beginner, our platform is here to guide you every step of the way.
        </p>
        <h3 style={headingStyles}>Planting Guidelines</h3>
        <p style={paragraphStyles}>
          Growing plants successfully requires the right care and attention. Follow these guidelines to nurture your plants:
        </p>
        <ul style={paragraphStyles}>
          <li>Choose the right plant for your space and climate.</li>
          <li>Provide adequate sunlight and water based on plant requirements.</li>
          <li>Use high-quality soil and suitable containers if you're potting plants.</li>
          <li>Regularly prune and fertilize your plants for optimal growth.</li>
        </ul>
        <h3 style={headingStyles}>Disease Protection</h3>
        <p style={paragraphStyles}>
          Protecting your plants from diseases is essential for their well-being. Here are some tips to prevent and manage plant diseases:
        </p>
        <ul style={paragraphStyles}>
          <li>Maintain good sanitation practices in your garden or indoor space.</li>
          <li>Regularly inspect your plants for signs of disease or pests.</li>
          <li>Isolate infected plants to prevent the spread of diseases.</li>
          <li>Use organic or chemical treatments as needed, following recommended guidelines.</li>
        </ul>
      </div>
      <div style={loveNatureStyles}>Our Love towards Nature</div>
      <div style={imageGalleryStyles}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwxtGvNqzE9YbNQT07hP5Rj2YIdDaE40mkw&usqp=CAU"
          alt="Image 1"
          style={galleryImageStyles}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvD4gem1jIgn35zHPDYC0shtkSsRlGEnGk9Q&usqp=CAU"
          alt="Image 2"
          style={galleryImageStyles}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBK8hd5PZOarlsdoucA2VfPHMKlmDy6lT0WA&usqp=CAU"
          alt="Image 3"
          style={galleryImageStyles}
        />
      
      </div>
    </div>
  );
}

export default AboutUs;
