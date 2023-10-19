import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '@/components/active-section-context';
import { useEffect } from "react";
import type { SectionName } from "./types";

type useSectionInViewProps={
    sectionName:SectionName;
}

export function UseSectionInView(
    sectionName:SectionName, threshold= 0.75){
    const {ref,inView}=useInView({
        threshold,
      });
      const {setActiveSection,timeOfLastClick} = useActiveSectionContext();
    
      useEffect(()=>{
    
        if(inView && Date.now() - timeOfLastClick > 1000){
          setActiveSection(sectionName)
        }
    
      },[inView,setActiveSection,timeOfLastClick,sectionName]);

      return{
        ref,
      }
}