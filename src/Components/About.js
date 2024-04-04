import React from 'react'

function About(props) {
  return (
    <div className='container my-2'>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className={`accordion-header ${props.mode ? 'bg-white' : 'bg-dark'} ${props.mode ? 'text-black' : 'text-white'}`}>
      <button className={`accordion-button ${props.mode ? 'bg-white' : 'bg-dark'} ${props.mode ? 'text-black' : 'text-white'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      1. About Textify:
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className={`accordion-body ${props.mode ? 'bg-white' : 'bg-dark'} ${props.mode ? 'text-black' : 'text-white'}`}>
         Textify is a versatile and user-friendly app designed to streamline your text editing tasks. With Textify, you can effortlessly convert text to uppercase, lowercase, title case, and more. Whether you're writing an email, composing a document, or simply tidying up your notes, Textify offers a convenient solution to transform your text with just a few clicks.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed ${props.mode ? 'bg-white' : 'bg-dark'} ${props.mode ? 'text-black' : 'text-white'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      2. Simplify Text Editing with Textify:
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className={`accordion-body ${props.mode ? 'bg-white' : 'bg-dark'} ${props.mode ? 'text-black' : 'text-white'}`}>
      Say goodbye to manual text formatting with Textify. Our app simplifies the process of converting text to uppercase, making it easy to ensure consistency and professionalism in your writing. Whether you're a student, professional, or creative writer, Textify empowers you to effortlessly enhance the readability and impact of your text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed ${props.mode ? 'bg-white' : 'bg-dark'} ${props.mode ? 'text-black' : 'text-white'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      3. Elevate Your Text Editing Experience:
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className={`accordion-body ${props.mode ? 'bg-white' : 'bg-dark'} ${props.mode ? 'text-black' : 'text-white'}`}>
      Transform your text effortlessly with Textify's intuitive features. From converting text to uppercase to capitalizing specific words, our app offers a range of utilities to suit your editing needs. With Textify, you can focus on expressing your ideas without getting bogged down by tedious formatting tasks. Streamline your workflow and elevate your text editing experience with Textify today.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
