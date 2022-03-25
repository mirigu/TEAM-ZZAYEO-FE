import React from "react";
import styled from "styled-components";

const Banner = (props) => {
  return (
    <Container>
      <p>
        짜여와 함께
        <br />
        여행 짤 준비됐나요?
      </p>

      <ImgCon>
      <svg width="157" height="132" viewBox="0 0 157 132" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M76.6404 105.87C105.768 105.87 129.38 82.2574 129.38 53.1299C129.38 24.0024 105.768 0.389893 76.6404 0.389893C47.5129 0.389893 23.9004 24.0024 23.9004 53.1299C23.9004 82.2574 47.5129 105.87 76.6404 105.87Z" fill="#E0E0FC"/>
<path d="M45.7897 99.9601C45.7897 99.9601 39.0097 101.84 38.6297 103.68C37.9797 106.84 39.6497 123.87 41.4197 125.82C43.1897 127.77 48.8597 128.61 51.8397 128.33C54.8197 128.05 80.5797 122.66 81.8897 121.35C83.1997 120.04 82.9097 110.37 82.7297 107.21C82.5497 104.05 81.1497 99.2101 78.8197 97.1601C76.4897 95.1101 74.8197 94.2801 72.1197 94.5601C69.4197 94.8401 45.7897 99.9601 45.7897 99.9601Z" fill="#E0AA53" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M40.9502 103.4C40.9502 103.4 46.1602 105.91 47.9302 105.63C49.7002 105.35 66.7202 100.7 73.7002 99.96" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M47.1895 105.73C47.1895 105.73 48.3995 122.38 49.1395 124.8" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M76.6163 106.377L68.3447 110.218L71.2973 116.576L79.5689 112.735L76.6163 106.377Z" fill="#7EE0BD" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M55.6899 110.77L52.1299 120.53L64.3699 113.94L55.6899 110.77Z" fill="#EF65C1" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M76.692 118.017C77.4553 116.218 76.8375 114.234 75.3122 113.587C73.7868 112.94 71.9315 113.875 71.1682 115.675C70.4049 117.475 71.0227 119.458 72.5481 120.105C74.0734 120.752 75.9287 119.817 76.692 118.017Z" fill="#B7E26D" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M66.9494 95.3801C66.9494 95.3801 71.7595 99.0801 72.1795 100.4C72.5995 101.72 75.5295 122.45 75.1795 123.98C75.1795 123.98 78.8794 124.54 79.8494 122.03C79.8494 122.03 78.4094 101.25 76.7794 99.2901C75.1494 97.3301 72.9394 94.6901 70.9894 94.4101C70.0194 94.2701 67.5695 93.5001 66.9395 95.3901L66.9494 95.3801Z" fill="#6D6EE4" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M55.2995 99.6401L57.5295 101.38C57.5295 101.38 58.6495 101.38 58.3695 100.47C58.0895 99.5601 56.8395 98.5201 56.8395 98.5201L56.5595 96.0101L64.4395 93.9901C64.4395 93.9901 64.7195 97.4801 66.0395 98.5201C67.3595 99.5601 68.7595 99.5701 69.3195 99.2901L67.8495 97.2701C67.8495 97.2701 67.3596 91.9001 65.4796 91.5501C63.5996 91.2001 54.7395 92.5301 54.3895 94.4801C54.0395 96.4301 55.2995 99.6401 55.2995 99.6401Z" fill="#D8D8D8" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M45.7899 99.9602C45.7899 99.9602 52.5799 102.94 53.4199 104.52C54.2599 106.1 56.5799 125.82 56.0199 127.96C56.0199 127.96 56.0999 128.38 57.7799 128.06C59.4599 127.74 59.9399 127.57 60.0499 126.87C60.1599 126.17 58.9299 105.66 57.6099 103.11C56.2899 100.56 51.2999 98.3302 49.7599 98.2602C48.2199 98.1902 44.7599 99.4002 45.7899 99.9502V99.9602Z" fill="#6D6EE4" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M122.579 9.95654C122.579 9.95654 125.049 11.4065 123.739 13.0565C122.429 14.7065 120.729 12.6665 120.729 12.6665L122.579 9.95654Z" fill="white" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M124.76 6.09643C124.76 6.09643 127.09 7.47643 125.86 9.02643C124.63 10.5764 123.01 8.65643 123.01 8.65643L124.76 6.08643V6.09643Z" fill="white" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M119.6 26.7264C119.6 26.7264 122.76 26.0264 122.95 28.3964C123.14 30.7664 120.16 30.3964 120.16 30.3964L119.6 26.7264Z" fill="white" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M120.909 32.2164C120.909 32.2164 124.069 31.5164 124.259 33.8864C124.449 36.2564 121.469 35.8864 121.469 35.8864L120.909 32.2164Z" fill="white" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M107.189 15.1464C107.189 15.1464 125.519 2.67644 127.189 3.00644C128.859 3.33644 118.819 17.5664 118.819 17.5664L107.189 15.1464Z" fill="white" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M130.439 18.0364C130.439 18.0364 110.719 14.5464 105.839 14.1264C100.959 13.7064 93.6993 13.3864 93.0993 15.1964C92.4993 17.0064 94.6293 19.9364 99.1893 20.6864C103.749 21.4364 108.169 22.0864 108.169 22.0864C108.169 22.0864 120.209 38.9264 122.909 38.9264C124.309 38.9264 119.929 24.1864 119.929 24.1864L130.069 25.2564C130.069 25.2564 132.769 29.5864 134.069 29.7664C135.369 29.9464 137.469 29.8164 137.469 29.8164L135.749 24.5164C135.749 24.5164 138.349 22.1864 138.909 21.4464L135.929 20.8464L137.229 13.9664L135.829 13.7764L130.429 18.0564L130.439 18.0364Z" fill="white" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M94.9492 14.1765C94.9492 14.1765 96.3892 17.5765 98.3892 17.8965" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M102.059 18.8864C102.424 18.8864 102.719 18.5909 102.719 18.2264C102.719 17.8619 102.424 17.5664 102.059 17.5664C101.695 17.5664 101.399 17.8619 101.399 18.2264C101.399 18.5909 101.695 18.8864 102.059 18.8864Z" fill="#4E49E2"/>
<path d="M104.329 19.2265C104.693 19.2265 104.989 18.931 104.989 18.5665C104.989 18.202 104.693 17.9065 104.329 17.9065C103.964 17.9065 103.669 18.202 103.669 18.5665C103.669 18.931 103.964 19.2265 104.329 19.2265Z" fill="#4E49E2"/>
<path d="M106.599 19.5563C106.964 19.5563 107.259 19.2608 107.259 18.8963C107.259 18.5318 106.964 18.2363 106.599 18.2363C106.235 18.2363 105.939 18.5318 105.939 18.8963C105.939 19.2608 106.235 19.5563 106.599 19.5563Z" fill="#4E49E2"/>
<path d="M108.88 19.8864C109.244 19.8864 109.54 19.5909 109.54 19.2264C109.54 18.8619 109.244 18.5664 108.88 18.5664C108.515 18.5664 108.22 18.8619 108.22 19.2264C108.22 19.5909 108.515 19.8864 108.88 19.8864Z" fill="#4E49E2"/>
<path d="M111.149 20.2165C111.514 20.2165 111.809 19.921 111.809 19.5565C111.809 19.192 111.514 18.8965 111.149 18.8965C110.785 18.8965 110.489 19.192 110.489 19.5565C110.489 19.921 110.785 20.2165 111.149 20.2165Z" fill="#4E49E2"/>
<path d="M113.42 20.5563C113.784 20.5563 114.08 20.2608 114.08 19.8963C114.08 19.5318 113.784 19.2363 113.42 19.2363C113.055 19.2363 112.76 19.5318 112.76 19.8963C112.76 20.2608 113.055 20.5563 113.42 20.5563Z" fill="#4E49E2"/>
<path d="M115.699 20.8864C116.064 20.8864 116.359 20.5909 116.359 20.2264C116.359 19.8619 116.064 19.5664 115.699 19.5664C115.335 19.5664 115.039 19.8619 115.039 20.2264C115.039 20.5909 115.335 20.8864 115.699 20.8864Z" fill="#4E49E2"/>
<path d="M117.97 21.2165C118.334 21.2165 118.63 20.921 118.63 20.5565C118.63 20.192 118.334 19.8965 117.97 19.8965C117.605 19.8965 117.31 20.192 117.31 20.5565C117.31 20.921 117.605 21.2165 117.97 21.2165Z" fill="#4E49E2"/>
<path d="M120.25 21.5563C120.614 21.5563 120.91 21.2608 120.91 20.8963C120.91 20.5318 120.614 20.2363 120.25 20.2363C119.885 20.2363 119.59 20.5318 119.59 20.8963C119.59 21.2608 119.885 21.5563 120.25 21.5563Z" fill="#4E49E2"/>
<path d="M122.519 21.8864C122.884 21.8864 123.179 21.5909 123.179 21.2264C123.179 20.8619 122.884 20.5664 122.519 20.5664C122.155 20.5664 121.859 20.8619 121.859 21.2264C121.859 21.5909 122.155 21.8864 122.519 21.8864Z" fill="#4E49E2"/>
<path d="M124.79 22.2165C125.154 22.2165 125.45 21.921 125.45 21.5565C125.45 21.192 125.154 20.8965 124.79 20.8965C124.425 20.8965 124.13 21.192 124.13 21.5565C124.13 21.921 124.425 22.2165 124.79 22.2165Z" fill="#4E49E2"/>
<path d="M127.069 22.5563C127.434 22.5563 127.729 22.2608 127.729 21.8963C127.729 21.5318 127.434 21.2363 127.069 21.2363C126.705 21.2363 126.409 21.5318 126.409 21.8963C126.409 22.2608 126.705 22.5563 127.069 22.5563Z" fill="#4E49E2"/>
<path d="M134.719 15.0364L132.839 21.6564" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M42.3997 35.8599C41.9797 35.8599 41.5297 35.8299 41.0597 35.7799C40.4797 35.7099 37.8197 35.6299 28.4197 35.6299C18.4597 35.6299 6.1697 35.7199 6.0397 35.7199C5.8297 35.7199 5.6297 35.6299 5.4897 35.4799C5.4097 35.3899 3.4597 33.2299 3.7697 30.6899C3.9497 29.2299 4.8197 27.9699 6.3497 26.9499C7.6497 26.0899 8.9597 25.6499 10.2297 25.6499C11.4997 25.6499 12.5797 26.0899 13.3597 26.5999C13.2297 24.5399 13.3997 21.3399 15.1897 19.0099C16.5097 17.2899 18.4797 16.3499 21.0397 16.2099C21.3397 16.1899 21.6297 16.1899 21.9197 16.1899C28.5897 16.1899 30.6997 20.4999 31.3397 22.6299C31.6497 22.4999 32.0297 22.4099 32.4697 22.4099C33.1797 22.4099 33.9297 22.6399 34.6897 23.1099C35.6197 23.6699 36.1997 24.3899 36.3897 25.2299C36.4297 25.4199 36.4597 25.5999 36.4597 25.7799C37.0997 25.5799 37.8997 25.3999 38.7597 25.3999C39.8797 25.3999 40.8697 25.6999 41.7097 26.2899C42.5797 26.9099 43.0797 27.6799 43.1897 28.5899C43.2597 29.1699 43.1597 29.7199 42.9897 30.1999C43.1297 30.1999 43.2697 30.1799 43.4197 30.1799C45.6697 30.1799 46.2697 31.4899 46.4297 32.2699C46.6697 33.4399 46.3097 34.1899 45.9597 34.6199C45.2997 35.4299 44.0697 35.8599 42.3997 35.8599Z" fill="white"/>
<path d="M21.9102 16.9399C30.1602 16.9399 30.8402 23.8799 30.8402 23.8799C30.8402 23.8799 31.3802 23.1699 32.4602 23.1699C32.9602 23.1699 33.5702 23.3199 34.2902 23.7599C36.5902 25.1499 35.3802 27.0299 35.3802 27.0299C35.3802 27.0299 36.9602 26.1599 38.7502 26.1599C39.5902 26.1599 40.4702 26.3499 41.2602 26.9099C43.7502 28.6699 41.5602 31.2199 41.5602 31.2199C41.5602 31.2199 42.4502 30.9399 43.4002 30.9399C44.3502 30.9399 45.4402 31.2399 45.6802 32.4299C46.0902 34.4099 44.4502 35.1099 42.3802 35.1099C41.9802 35.1099 41.5502 35.0799 41.1302 35.0299C40.1302 34.9099 34.7002 34.8799 28.4002 34.8799C18.3202 34.8799 6.02018 34.9699 6.02018 34.9699C6.02018 34.9699 2.08018 30.6599 6.75018 27.5699C8.05018 26.7099 9.22018 26.3999 10.2202 26.3999C12.8202 26.3999 14.3302 28.4799 14.3302 28.4799C14.3302 28.4799 12.0302 17.4399 21.0602 16.9599C21.3502 16.9399 21.6302 16.9399 21.9002 16.9399H21.9102ZM21.9002 15.4399C21.6002 15.4399 21.3002 15.4399 20.9802 15.4699C18.1902 15.6199 16.0402 16.6599 14.5802 18.5599C13.0002 20.6099 12.5902 23.2699 12.5702 25.3599C11.8902 25.0899 11.1102 24.8999 10.2202 24.8999C8.79018 24.8999 7.35018 25.3799 5.92018 26.3199C4.19018 27.4599 3.21018 28.8999 3.01018 30.5899C2.66018 33.4199 4.69018 35.7299 4.92018 35.9799C5.20018 36.2899 5.61018 36.4699 6.03018 36.4699H6.04018C6.16018 36.4699 18.4602 36.3799 28.4102 36.3799C38.2702 36.3799 40.5002 36.4699 40.9602 36.5199C41.4502 36.5799 41.9302 36.6099 42.3802 36.6099C44.3102 36.6099 45.7002 36.0999 46.5202 35.0899C46.9702 34.5399 47.4502 33.5699 47.1502 32.1199C46.8302 30.5799 45.6402 29.6099 43.9102 29.4499C43.9502 29.1399 43.9502 28.8199 43.9102 28.4899C43.8102 27.7199 43.4302 26.5999 42.1202 25.6699C41.1602 24.9899 40.0202 24.6399 38.7402 24.6399C38.1402 24.6399 37.5602 24.7199 37.0402 24.8299C36.8302 24.1299 36.3102 23.2099 35.0602 22.4499C34.1802 21.9099 33.3002 21.6399 32.4502 21.6399C32.2402 21.6399 32.0302 21.6599 31.8402 21.6899C30.7902 18.8399 27.9402 15.4199 21.9002 15.4199V15.4399Z" fill="#4E49E2"/>
<path d="M115.224 79.45C115.114 79.45 115.014 79.43 114.914 79.38C114.794 79.32 111.844 77.96 110.994 75.65C110.634 74.68 110.684 73.69 111.144 72.71C111.664 71.6 112.964 70.27 116.244 70.27C117.304 70.27 118.334 70.41 119.114 70.55C118.884 69.6 118.814 68.34 119.634 67.27C120.094 66.67 120.754 66.35 121.554 66.35C122.094 66.35 122.624 66.49 123.104 66.68C122.934 65.04 123.264 63.33 124.054 61.88C125.344 59.54 127.834 57.85 131.254 57C131.934 56.83 132.594 56.75 133.214 56.75C138.584 56.75 140.214 62.66 140.654 65.11C141.454 64.79 142.654 64.41 143.874 64.41C144.794 64.41 145.614 64.63 146.284 65.05C147.984 66.12 147.964 68.17 147.684 69.64C148.494 69.32 149.524 69.03 150.604 69.03C152.544 69.03 154.074 69.97 155.024 71.76C155.834 73.28 156.014 74.74 155.564 76.1C154.804 78.38 152.504 79.48 152.404 79.53C152.304 79.58 152.194 79.6 152.084 79.6L115.224 79.45Z" fill="white"/>
<path d="M133.204 57.5C139.224 57.5 140.054 66.21 140.054 66.21C140.054 66.21 141.964 65.15 143.874 65.15C144.574 65.15 145.274 65.29 145.884 65.68C148.154 67.12 146.494 71.05 146.494 71.05C146.494 71.05 148.494 69.77 150.604 69.77C151.984 69.77 153.414 70.31 154.364 72.11C156.784 76.65 152.094 78.85 152.094 78.85L115.234 78.7C115.234 78.7 110.234 76.43 111.824 73.02C112.564 71.44 114.434 71.02 116.244 71.02C118.324 71.02 120.304 71.59 120.304 71.59C120.304 71.59 119.014 69.32 120.224 67.73C120.574 67.27 121.044 67.11 121.544 67.11C122.774 67.11 124.164 68.11 124.164 68.11C123.184 65.16 123.784 59.63 131.434 57.74C132.074 57.58 132.664 57.51 133.214 57.51L133.204 57.5ZM133.204 56C132.524 56 131.794 56.09 131.064 56.27C126.484 57.4 124.354 59.75 123.384 61.51C122.684 62.78 122.324 64.22 122.294 65.67C122.044 65.62 121.794 65.6 121.534 65.6C120.504 65.6 119.614 66.03 119.024 66.81C118.354 67.69 118.154 68.7 118.214 69.65C117.604 69.57 116.924 69.52 116.234 69.52C112.564 69.52 111.074 71.08 110.454 72.39C109.914 73.54 109.854 74.76 110.284 75.91C111.234 78.47 114.254 79.91 114.604 80.07C114.794 80.16 115.004 80.2 115.214 80.2L152.074 80.35C152.294 80.35 152.514 80.3 152.714 80.21C152.984 80.08 155.414 78.88 156.264 76.34C156.784 74.78 156.584 73.12 155.674 71.41C154.584 69.36 152.824 68.28 150.584 68.28C149.874 68.28 149.184 68.39 148.554 68.56C148.614 67 148.184 65.38 146.664 64.42C145.874 63.92 144.924 63.66 143.854 63.66C142.884 63.66 141.954 63.87 141.184 64.11C140.984 63.28 140.694 62.27 140.244 61.25C138.744 57.82 136.314 56 133.204 56Z" fill="#4E49E2"/>
<path d="M77.4495 126.07C77.4495 126.07 74.5696 125.67 73.9996 127.61C73.4296 129.55 75.9796 130.23 77.5096 130.4C79.0396 130.57 82.1596 131.17 83.1196 130.68C84.0796 130.19 85.3395 129.11 85.3395 129.11L77.4596 126.06L77.4495 126.07Z" fill="#BFC4E1" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M91.0596 127.06C91.0596 127.06 91.4996 127.77 91.2996 128.81C91.0996 129.85 91.2396 130.54 92.0296 130.72C92.8196 130.9 95.2196 130.21 96.6696 129.02C98.1196 127.83 100.08 124.75 99.2996 123.46C98.5196 122.17 97.2496 120.96 95.8696 121.29C94.4896 121.62 91.0596 127.07 91.0596 127.07V127.06Z" fill="#BFC4E1" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M72.6094 108.39C72.6094 108.39 76.0594 117.06 78.9594 119.74L76.7894 125.77L85.3294 129.12L89.0694 125.31L91.0494 127.06L98.0794 120.64L95.8094 117.88C95.8094 117.88 100.649 112.54 96.6294 106.68L84.1594 102.92L72.6194 108.39H72.6094Z" fill="#6D6EE4" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M68.7295 95.4201C68.7295 95.4201 68.8795 105.27 71.0095 107.47L72.9995 96.2901L71.4595 93.5801L68.7295 95.4201Z" fill="white" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M69.5198 86.2599C69.5198 86.2599 67.1198 92.0299 67.1798 94.6299C67.1798 94.6299 68.0798 95.9299 71.4098 96.0499C71.4098 96.0499 70.6098 105.4 71.3198 109.16C71.3198 109.16 93.1298 107.04 98.5198 106.19C98.5198 106.19 96.3498 95.2599 95.7898 92.7499L102.32 88.0299C102.32 88.0299 99.3898 80.6399 93.3798 79.9499C93.3798 79.9499 83.9398 78.6399 79.3498 80.5399C74.7598 82.4399 69.5298 86.2599 69.5298 86.2599H69.5198Z" fill="#B8F16F" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M78.96 119.75L81.86 112.2" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M89.0791 125.31L95.8091 117.88" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M92.3095 80.8299C92.4995 85.0299 90.4395 91.6899 95.3695 97.3499C95.3695 97.3499 85.5595 94.8299 87.6495 82.9999C89.7395 71.1699 92.2595 79.5399 92.3095 80.8299Z" fill="#E2257F" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M73.4695 86.1501C73.4695 86.1501 71.4395 91.3801 71.4095 96.0501C71.4095 96.0501 69.2995 88.3701 70.3195 85.3701L73.4695 86.1601V86.1501Z" fill="#E2257F" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M64.3596 39.3699C64.3596 39.3699 61.2096 33.9899 56.8796 36.8899C52.5496 39.7899 53.8296 44.1699 55.8196 46.8299C55.8196 46.8299 51.3396 55.8999 52.3996 62.5999C53.4596 69.2999 54.9496 68.3299 54.1296 71.1399C53.3096 73.9499 52.3996 77.7199 56.5996 82.3599C60.7896 87.0099 69.9996 88.9599 80.2996 86.7499C90.5896 84.5399 100.92 80.4099 106.4 71.1599C109.82 65.3799 111.23 57.4299 108.2 49.6399C106.38 44.9699 103.21 39.9199 97.2596 36.6399C97.2596 36.6399 100.4 29.9199 94.6396 27.0499C88.8796 24.1799 85.5496 32.9399 85.5496 32.9399C85.5496 32.9399 74.7596 31.3899 64.3596 39.3699Z" fill="white" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M68.3001 36.1199C68.3001 36.1199 63.47 38.3399 64.28 40.9999C65.09 43.6599 75.1 39.8999 77.06 39.1699C79.02 38.4399 84.4501 36.4899 86.85 36.3599C86.85 36.3599 86.5401 29.1099 83.7901 27.0399C81.0401 24.9699 77.5601 23.9399 74.1201 25.5199C70.6801 27.0999 68.05 29.0199 67.78 31.9399C67.51 34.8599 68.3001 36.1199 68.3001 36.1199Z" fill="#6D6EE4" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M74.2998 28.0598C74.2998 28.0598 72.0898 30.7998 72.4898 33.2198" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M76.6699 28.1399C76.6699 28.1399 78.6799 30.6399 79.0399 32.0699" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M80.3701 27.5C80.3701 27.5 82.8401 28.85 83.1101 31.26" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M70.6504 35.92C70.6504 35.92 75.8004 34.81 81.6304 35.35" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M56.3291 40.6198C55.9291 41.2198 55.7791 42.1898 56.0991 43.4998C56.4491 44.9198 57.3591 45.8698 58.2191 45.8198C59.0791 45.7698 59.3991 45.1498 59.0991 44.3998C58.7991 43.6498 57.9491 43.4298 58.8991 42.4798C59.8491 41.5298 59.0091 40.2998 58.1891 39.8598C57.3691 39.4198 56.5991 40.1898 56.3291 40.6098V40.6198Z" fill="#BFC4E1" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M92.0796 30.97C92.0796 30.97 90.7996 31.11 90.6496 32.7C90.4996 34.29 90.6496 34.48 91.6196 34.99C92.5896 35.5 93.4896 35.84 93.3896 36.85C93.2896 37.86 92.9796 38.59 93.8796 38.84C94.7796 39.09 95.2496 38.63 95.5496 37.22C95.8496 35.81 96.3596 33.91 95.1396 32.53C93.9196 31.15 93.5096 30.94 92.0696 30.98L92.0796 30.97Z" fill="#BFC4E1" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M66.7595 59.1101C66.7595 59.1101 64.9095 59.0901 65.0895 61.6201C65.2695 64.1501 65.9795 64.5001 67.0095 64.4301C68.0395 64.3601 68.9695 63.4401 68.5695 61.1701C68.1695 58.9001 66.7495 59.1101 66.7495 59.1101H66.7595Z" fill="#4E49E2"/>
<path d="M80.6491 55.1399C80.6491 55.1399 78.7991 55.1199 78.9791 57.6499C79.1591 60.1799 79.8691 60.5299 80.8991 60.4599C81.9291 60.3899 82.8591 59.4699 82.4591 57.1999C82.0591 54.9299 80.6391 55.1399 80.6391 55.1399H80.6491Z" fill="#4E49E2"/>
<path d="M74.1496 63.97C73.6596 64.01 72.7596 64.06 72.7696 65.17C72.7796 66.28 73.6996 67.08 74.4296 66.98C75.1996 66.88 76.0896 65.75 75.7196 64.44C75.5396 63.82 74.7696 63.91 74.1596 63.96L74.1496 63.97Z" fill="#4E49E2"/>
<path d="M74.3896 67.0601L74.4996 71.0601" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M71.7295 71.77C71.7295 71.77 74.9995 71.9 78.3995 70.25C78.3995 70.25 79.6095 74.79 75.4695 75.29C72.9595 75.6 71.8595 73.18 71.7295 71.77V71.77Z" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M86.2612 68.2842C88.69 67.5025 90.2037 65.4539 89.6419 63.7085C89.0802 61.9631 86.6558 61.1818 84.2269 61.9635C81.7981 62.7452 80.2845 64.7938 80.8462 66.5393C81.408 68.2847 83.8323 69.0659 86.2612 68.2842Z" fill="#FFE9E9"/>
<path d="M65.2023 72.7279C67.2317 72.2385 68.5819 70.6187 68.2181 69.11C67.8542 67.6013 65.914 66.7751 63.8846 67.2646C61.8552 67.7541 60.5049 69.3739 60.8688 70.8825C61.2327 72.3912 63.1728 73.2174 65.2023 72.7279Z" fill="#FFE9E9"/>
<path opacity="0.95" d="M62.3096 63.0498L85.5096 57.7798C85.5096 57.7798 87.9696 64.6098 82.0696 65.7598C76.1696 66.9098 75.0396 61.0898 75.0396 61.0898L72.0396 61.8298C72.0396 61.8298 73.8496 66.8598 68.4296 68.1098C63.0096 69.3498 62.4496 63.5798 62.3096 63.0598V63.0498Z" fill="#6D6EE4" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M120.039 130.12C121.381 130.12 122.469 129.032 122.469 127.69C122.469 126.348 121.381 125.26 120.039 125.26C118.697 125.26 117.609 126.348 117.609 127.69C117.609 129.032 118.697 130.12 120.039 130.12Z" fill="#BFC4E1" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M111.339 128.07C112.455 128.07 113.359 127.165 113.359 126.05C113.359 124.934 112.455 124.03 111.339 124.03C110.224 124.03 109.319 124.934 109.319 126.05C109.319 127.165 110.224 128.07 111.339 128.07Z" fill="#BFC4E1" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M103.1 106.33C103.1 106.33 99.1696 108.3 98.7996 109.52C98.4296 110.74 105.28 124.51 107.81 125.49C110.34 126.47 118.65 128.77 120 127.96C121.35 127.15 124.55 124.39 124.08 123.12C123.61 121.85 117.88 108.2 116.22 107.63C114.56 107.06 105.38 105.99 103.09 106.33H103.1Z" fill="#B8F16F" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M111.24 111.73C110.67 111.73 110.13 111.41 109.88 110.86L107.65 106.06L102.86 105.55L104.47 108.52C104.86 109.25 104.59 110.16 103.86 110.55C103.13 110.94 102.22 110.67 101.83 109.94L98.8697 104.46C98.5997 103.97 98.6297 103.37 98.9397 102.91C99.2497 102.45 99.7897 102.19 100.35 102.25L108.82 103.16C109.34 103.22 109.8 103.54 110.02 104.02L112.6 109.59C112.95 110.34 112.62 111.23 111.87 111.58C111.67 111.67 111.45 111.72 111.24 111.72V111.73Z" fill="#4E49E2"/>
<path d="M100.329 110.7L112.069 112.45L115.509 109.21" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M112.069 112.45L117.849 125.05" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M101.259 88.8799L93.3193 94.1799C93.3193 94.1799 101.219 108.93 104.419 106.62C107.619 104.31 101.259 88.8799 101.259 88.8799Z" fill="white" stroke="#4E49E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.4192 48.97C17.4892 48.97 10.5692 48.38 7.61921 48.12C7.03921 48.07 6.58921 48.03 6.31921 48.01C4.54921 47.88 2.18921 46.91 1.20921 45.09C0.729209 44.19 0.389209 42.71 1.49921 40.71C2.58921 38.76 4.13921 38.35 5.23921 38.35C6.22921 38.35 7.17921 38.67 7.90921 39.02C7.85921 37.84 8.00921 36.22 8.95921 34.83C9.94921 33.39 11.5492 32.54 13.7392 32.3C14.1292 32.26 14.4892 32.24 14.8392 32.24C19.0592 32.24 20.7292 35.27 21.1992 37.64C21.6792 37.4 22.2992 37.21 23.0492 37.21C23.3092 37.21 23.5792 37.23 23.8392 37.28C24.8292 37.45 25.5792 37.92 26.0692 38.67C26.4992 39.33 26.6392 40.1 26.6592 40.76C27.0492 40.64 27.4692 40.57 27.8792 40.57C29.0592 40.57 30.1392 41.07 30.8292 41.94C31.5192 42.81 31.7092 44.08 31.3292 45.25C31.0292 46.16 30.1192 47.8 27.3792 48.56C26.4092 48.83 24.7792 48.96 22.4192 48.96V48.97Z" fill="white"/>
<path d="M14.8396 32.99C20.5396 32.99 20.5896 39 20.5896 39C20.5896 39 21.4496 37.96 23.0496 37.96C23.2596 37.96 23.4796 37.98 23.7096 38.02C26.6696 38.53 25.7896 42.07 25.7896 42.07C26.3496 41.59 27.1196 41.33 27.8796 41.33C28.7596 41.33 29.6496 41.68 30.2396 42.42C31.3396 43.81 30.9296 46.81 27.1796 47.85C26.1996 48.12 24.4796 48.22 22.4196 48.22C16.5896 48.22 8.0796 47.4 6.3696 47.27C4.0596 47.1 -0.100402 45.13 2.1496 41.09C2.9896 39.58 4.1296 39.11 5.2396 39.11C7.0996 39.11 8.8596 40.45 8.8596 40.45C8.8596 40.45 7.1296 33.8 13.8296 33.05C14.1896 33.01 14.5196 32.99 14.8396 32.99ZM14.8396 31.49C14.4596 31.49 14.0596 31.51 13.6596 31.56C11.2496 31.83 9.4596 32.79 8.3496 34.41C7.5696 35.54 7.2696 36.81 7.1896 37.92C6.5896 37.73 5.9296 37.6 5.2396 37.6C3.9296 37.6 2.1096 38.08 0.839598 40.35C-0.440402 42.64 -0.0204018 44.39 0.549598 45.45C1.6596 47.51 4.2896 48.61 6.2596 48.76C6.5296 48.78 6.9696 48.82 7.5496 48.87C10.5096 49.12 17.4596 49.72 22.4196 49.72C24.8496 49.72 26.5396 49.58 27.5796 49.29C30.6596 48.44 31.6996 46.54 32.0396 45.49C32.4996 44.08 32.2596 42.55 31.4196 41.48C30.5896 40.43 29.2996 39.82 27.8796 39.82C27.6896 39.82 27.4996 39.83 27.3196 39.85C27.2196 39.32 27.0296 38.76 26.6996 38.25C26.0996 37.33 25.1596 36.74 23.9696 36.53C23.6596 36.48 23.3496 36.45 23.0496 36.45C22.5496 36.45 22.0996 36.52 21.6996 36.63C21.5796 36.22 21.4096 35.78 21.1996 35.33C19.9996 32.84 17.7396 31.48 14.8396 31.48V31.49Z" fill="#4E49E2"/>
</svg>
      </ImgCon>


    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 148px;
  padding: 0px 24px;
  background-color: #cfcfff;

  p {
    margin: 0;
    padding-bottom: 40px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #212121;
  }
`;

const ImgCon = styled.div`
  margin-bottom: 10px;
`;
export default Banner;
