import React from "react";
import ReactPlayer from 'react-player'
import '../styles/Howto.css';

const HowTo = () => {
    return (
        <div className="Howto">
            <ReactPlayer
                    className='react-player'
                    url={'https://youtu.be/aNwPdOY_5-o'}    // �÷��̾� url
                    width='800px'         // �÷��̾� ũ�� (����)
                    height='500px'        // �÷��̾� ũ�� (����)
                    playing={false}        // �ڵ� ��� on
                    muted={false}          // �ڵ� ��� on
                    controls={true}       // �÷��̾� ��Ʈ�� ���� ����
                    light={false}         // �÷��̾� ���
                    pip={true}            // pip ��� ���� ����
                    
                />
        </div>
    );
};

export default HowTo;
