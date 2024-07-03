import React from 'react';
import './PolicyDocuments.css'; 
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';


function PolicyDocuments() {
  return (

    <div className="sense">
      <h2>Company Policy Documents</h2>
      <div className="sense1">
        <h4>Employment Policies</h4>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Equal Opportunity Policy</Accordion.Header>
            <Accordion.Body>
              dedicated to fostering a work environment that values diversity and promotes equal opportunity for all employees and applicants. We do not discriminate on the basis of race, color, religion, sex, national origin, age, disability, or any other characteristic protected by applicable laws. Our commitment to equal employment opportunity ensures that all employment decisions are based on merit, qualifications, and abilities, without regard to personal characteristics or backgrounds. We believe that a diverse workforce enhances our ability to innovate, serve our customers, and achieve business success.
              <p>
              <Button variant="link">more</Button>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Non-Discrimination Policy</Accordion.Header>
            <Accordion.Body>
              committed to maintaining a workplace that is free from discrimination and harassment. We do not discriminate against employees or applicants for employment on the basis of race, color, religion, sex, sexual orientation, gender identity, national origin, age, disability, genetic information, marital status, or any other protected status recognized by applicable laws.
             <p>
              <Button variant="link">more</Button>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="sense2">
        <h4>Compensation and Benefits</h4>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Salary Structure Policy</Accordion.Header>
            <Accordion.Body>
            The Salary Structure Policy outlines our approach to determining and administering employee compensation. It ensures that salary decisions are fair, competitive, and aligned with industry standards, taking into account factors such as job role, experience, performance, and market conditions. Our goal is to maintain transparency and equity in compensation practices across the organization.
            <p>
              <Button variant="link">more</Button>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Benefits Eligibility Policy</Accordion.Header>
            <Accordion.Body>
            The Benefits Eligibility Policy defines the criteria and conditions under which employees are eligible to participate in the company's benefits programs. It outlines the types of benefits offered, such as health insurance, retirement plans, and wellness programs, and specifies eligibility requirements based on factors like employment status (full-time, part-time), tenure, and legal considerations. This policy ensures that all eligible employees have access to comprehensive benefits that support their well-being and work-life balance.
            <p>
              <Button variant="link">more</Button>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default PolicyDocuments;
