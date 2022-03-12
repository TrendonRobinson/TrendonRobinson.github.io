import React from "react";
import styled from "styled-components";

export default function Works() {
    return (
        <WorkContainer>
            Works
            <div class="grid grid-cols-4 gap-x-4 gap-y-1 max-w-1xl">
                {/* <!-- Title --> */}
                <div class="col-span-full mb-3">
                    <p class="text-xl text-gray-800">
                        {" "}
                        Today's popular searches{" "}
                    </p>
                </div>

                {/* <!-- Card 1 --> */}
                <div class="col-span-2">
                    <a href="link">
                        <img
                            src="https://i.ibb.co/fdKbG9j/Screen-Shot-2022-03-11-at-4-58-28-AM.png"
                            class="rounded-xl brightness-75"
                            alt="name"
                        />
                    </a>
                    <p class="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
                        Project Name
                    </p>
                </div>
                {/* <!-- Card 1 --> */}
                <div class="col-span-2">
                    <a href="link">
                        <img
                            src="https://i.ibb.co/fdKbG9j/Screen-Shot-2022-03-11-at-4-58-28-AM.png"
                            class="rounded-xl brightness-75"
                            alt="name"
                        />
                    </a>
                    <p class="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3">
                        Project Name
                    </p>
                </div>
            </div>
        </WorkContainer>
    );
}


const WorkContainer = styled.div`
    padding-top: 20%;
`