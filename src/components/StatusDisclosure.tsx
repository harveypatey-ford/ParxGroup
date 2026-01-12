import React from 'react';

interface StatusDisclosureProps {
  className?: string;
  textColor?: string;
}

const StatusDisclosure: React.FC<StatusDisclosureProps> = ({ 
  className = "text-neutral-500 text-xs", 
  textColor = "text-neutral-500" 
}) => {
  return (
    <div className={`py-3 px-4 ${className}`}>
      <p className={`text-xs ${textColor} max-w-4xl mx-auto text-center`}>
        Parx is a trading name of Parx Group Limited, registered in England & Wales with registered number 14768763, which is an Appointed Representative of CLS Property Insight Limited who are authorised and regulated by the Financial Conduct Authority (FRN 718255). Registered office: Stanford Gate, South Road, Brighton, BN1 6SB | Parx Group 2025 ©
      </p>
    </div>
  );
};

export default StatusDisclosure;