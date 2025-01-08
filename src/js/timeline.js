const timelineData = [
    { name: "Unimate, first robot, 1961", image: "/assets/img/unimate.avif" },
    { name: "Lunokhod 1, 1st remote-controlled robot from Earth to land on the moon, 1970", image: "/assets/img/lunokhod1.avif" },
    { name: "Roomba vacuum robot, 2002", image: "/assets/img/roomba.avif" },
    { name: "DER1, front desk Android, 2005", image: "/assets/img/der1.avif" },
    { name: "Atlas, Search and Rescue Androide 2013", image: "/assets/img/atlas.avif" },
    { name: "Spot, helper android, 2020", image: "/assets/img/spot-indoor.avif" },
    { name: "T800, Battle Robot, 2050", image: "/assets/img/t800-red-eyes.avif" },
    { name: "Combat exoskeleton, 2100", image: "/assets/img/exosqueleton.avif" },
    { name: "Marvin, the depressive robot, 2200", image: "/assets/img/marvin.avif" },
];

function createTimelineItem(event) {
    return `
        <div class="timeline-item">
            <div class="timeline-item__content">
                <img src="${event.image}" alt="${event.name}" class="timeline-item__image">
                <div class="timeline-item__info">
                    <h2 class="timeline-item__name">${event.name}</h2>
                </div>
            </div>
        </div>
    `;
}

function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    const timelineHTML = timelineData.map(createTimelineItem).join('');
    container.innerHTML = timelineHTML;
}

document.addEventListener('DOMContentLoaded', renderTimeline);