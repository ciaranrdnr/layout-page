import Card from '../../components/atoms/card';
import './style/color.css';
import '../typography/style/typograph.css';

const Color = () => {
  return (
    <div>
      <div className='row'>
        <div>
          <Card className='bg-grey-1'/>
          <p className='lg-regular'>grey-1</p>
          </div>
        <div>
          <Card className='bg-grey-2'/>
          <p className='lg-regular'>grey-2</p>
          </div>
        <div>
          <Card className='bg-grey-3'/>
          <p className='lg-regular'>grey-3</p>
          </div>
        <div>
          <Card className='bg-grey-4'/>
          <p className='lg-regular'>grey-4</p>
          </div>
        <div>
          <Card className='bg-grey-5'/>
          <p className='lg-regular'>grey-5</p>
          </div>
        <div>
          <Card className='bg-white'/>
          <p className='lg-regular'>white</p>
          </div>
      </div>
      <div className='row'>
        <div>
          <Card className='bg-blue-1'/>
          <p className='lg-regular'>blue-1</p>
          </div>
        <div>
          <Card className='bg-blue-2'/>
          <p className='lg-regular'>blue-</p>
          </div>
        <div>
          <Card className='bg-orange-1'/>
          <p className='lg-regular'>orange-1</p>
          </div>
        <div>
          <Card className='bg-orange-2'/>
          <p className='lg-regular'>orange-2</p>
          </div>
        <div>
          <Card className='bg-red-1'/>
          <p className='lg-regular'>red-1</p>
          </div>
        <div>
          <Card className='bg-red-2'/>
          <p className='lg-regular'>red-2</p>
          </div>
        </div>
    </div>
  );
};
export default Color