import React from 'react'

const GifList = (props) => {
  return (
    <div>
      <section id="gifs">
        {props.gifs.map(gif => <img key={gif.id} src={gif.images.fixed_height.url} alt=''/>)}
      </section>
    </div>
  )

}

export default GifList;
