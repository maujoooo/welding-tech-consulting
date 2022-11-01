import { servicesImages as images, servicesInfo as data } from './data'
import Carousel from './../../components/Carousel/Carousel'
import Card from '../../components/Card/Card'
import './services.scss'

const Services = () => {
  return (
    <div id='services' className='Services'>
      <header className='Services-header'>
        <Carousel images={images} />
        <h1 className='Services-title h1'>Services</h1>
      </header>
      <section className='Services-section'>
        <div className='Services-content'>
          <p className='Services-description'>
            The field of non-destructive testing (NDT) involves a wide range of
            analytical techniques used in many industries to detect and evaluate
            defects and verify the properties of materials and structures of all
            types without causing damage. Because NDT does not change the part
            or design being inspected, it is a very useful method that can save
            money and time in product evaluation, asset management and
            troubleshooting.
          </p>
        </div>
        <div className='Services-cards'>
          {data.map(({ title, description }, index) => {
            return <Card key={index} title={title} description={description} color={(index % 2 == 0) ? 'blue' : 'yellow'} />
          })}
        </div>
      </section>
    </div>
  )
}

export default Services
