
import { Collapse } from 'antd/dist/antd';
import 'antd/dist/reset.css';
import Container from '../ui/Container';

const { Panel } = Collapse;

const faqData = [
  { ask: 'Why Choose us?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita magnam voluptatum perferendis assumenda modi perspiciatis cum repellat a id officiis?' },
  { ask: 'Why Choose us?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita magnam voluptatum perferendis assumenda modi perspiciatis cum repellat a id officiis?' },
  { ask: 'Why Choose us?', ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita magnam voluptatum perferendis assumenda modi perspiciatis cum repellat a id officiis?' },
  
];



export default function FAQ() {
  return (
    <Container>
      <div className="py-20 flex flex-col justify-center items-center">
     <div className='w-full md:w-[75%] '>
     <h2 className="text-2xl font-bold text-center mb-6">FAQ</h2>
      <Collapse accordion className="bg-white rounded-lg shadow-lg">
        {faqData.map((item, index) => (
          <Panel header={item.ask} key={index} className="text-lg font-semibold">
            <p className="text-base text-gray-700">{item.ans}</p>
          </Panel>
        ))}
      </Collapse>
     </div>
    </div>
    </Container>
  );
}
