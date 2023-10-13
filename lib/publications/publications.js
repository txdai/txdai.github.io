// Step 1: Import the list of publications
import publicationsList from '../../publications/list.js';

// Step 2: Define a function to create a study element
function createStudyElement(study) {
    // Create the main study container
    const studyDiv = document.createElement('div');
    studyDiv.classList.add('study');

    // Create and set the study content container
    const studyContentDiv = document.createElement('div');
    studyContentDiv.classList.add('study-content');

    // Create and set the study details container
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('study-details');

    // Create and set the image element
    const imgElement = document.createElement('img');
    imgElement.src = study.imageSrc;
    imgElement.classList.add('study-image');

    // Create and set the text content container
    const textContentDiv = document.createElement('div');
    textContentDiv.classList.add('text-content');

    // Create and set the title element
    const titleElement = document.createElement('p');
    titleElement.classList.add('study-title');
    titleElement.textContent = study.title;
    titleElement.style.fontWeight = 'bold'; // Add bold style to the title

    // Create and set the authors element
    const authorsElement = document.createElement('p');
    authorsElement.classList.add('study-authors');
    authorsElement.innerHTML = study.authors;

    // Create and set the journal element
    const journalElement = document.createElement('p');
    journalElement.classList.add('study-journal');
    journalElement.textContent = study.journal;

    // Append the title, authors, and journal elements with spacing to the text content container
    textContentDiv.appendChild(titleElement);
    textContentDiv.appendChild(document.createElement('br')); // Add spacing
    textContentDiv.appendChild(authorsElement);
    textContentDiv.appendChild(document.createElement('br')); // Add spacing
    textContentDiv.appendChild(journalElement);

    // Create the study buttons container
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('study-buttons');

    // Create and set the PDF link button if study.pdfLink is defined and not an empty string
    const pdfLink = study.pdfLink && study.pdfLink.trim() !== '' ? document.createElement('a') : null;
    if (pdfLink) {
        pdfLink.classList.add('study-button', 'pdf-link');
        pdfLink.href = study.pdfLink;
        pdfLink.target = '_blank';
        pdfLink.textContent = 'PDF';
        buttonsDiv.appendChild(pdfLink);
    }

    // Create and set the link to the journal page if study.journalLink is defined and not an empty string
    const journalLink = study.journalLink && study.journalLink.trim() !== '' ? document.createElement('a') : null;
    if (journalLink) {
        journalLink.classList.add('study-button', 'journal-link');
        journalLink.href = study.journalLink;
        journalLink.target = '_blank';
        journalLink.textContent = 'Publisher';
        buttonsDiv.appendChild(journalLink);
    }

    // Create and set the link to the video page if study.videoLink is defined and not an empty string
    const videoLink = study.videoLink && study.videoLink.trim() !== '' ? document.createElement('a') : null;
    if (videoLink) {
        videoLink.classList.add('study-button', 'video-link');
        videoLink.href = study.videoLink;
        videoLink.target = '_blank';
        videoLink.textContent = 'Video';
        buttonsDiv.appendChild(videoLink);
    }

    // Create and set the Code link button if study.codeLink is defined and not an empty string
    const codeLink = study.codeLink && study.codeLink.trim() !== '' ? document.createElement('a') : null;
    if (codeLink) {
        codeLink.classList.add('study-button', 'code-link');
        codeLink.href = study.codeLink;
        codeLink.target = '_blank';
        codeLink.textContent = 'Code';
        buttonsDiv.appendChild(codeLink);
    }

    // Create and set the data link button if study.dataLink is defined and not an empty string
    const dataLink = study.dataLink && study.dataLink.trim() !== '' ? document.createElement('a') : null;
    if (dataLink) {
        dataLink.classList.add('study-button', 'data-link');
        dataLink.href = study.dataLink;
        dataLink.target = '_blank';
        dataLink.textContent = 'Data';
        buttonsDiv.appendChild(dataLink);
    }

    // Create and set the Website link button if study.websiteLink is defined and not an empty string
    const websiteLink = study.websiteLink && study.websiteLink.trim() !== '' ? document.createElement('a') : null;
    if (websiteLink) {
        websiteLink.classList.add('study-button', 'website-link');
        websiteLink.href = study.websiteLink;
        websiteLink.target = '_blank';
        websiteLink.textContent = 'Project Page';
        buttonsDiv.appendChild(websiteLink);
    }

    // Create and set the slides link button if study.slidesLink is defined and not an empty string
    const slidesLink = study.slidesLink && study.slidesLink.trim() !== '' ? document.createElement('a') : null;
    if (slidesLink) {
        slidesLink.classList.add('study-button', 'slides-link');
        slidesLink.href = study.websiteLink;
        slidesLink.target = '_blank';
        slidesLink.textContent = 'Slides';
        buttonsDiv.appendChild(slidesLink);
    }

    // Create and set the BibTeX link button
    const bibtexLink = document.createElement('a');
    bibtexLink.classList.add('study-button', 'bibtex-link');
    bibtexLink.textContent = 'BibTeX';

    // Create and set the BibTeX citation section
    const bibtexSection = document.createElement('div');
    bibtexSection.classList.add('bibtex-section');
    bibtexSection.style.display = 'none'; // Initially hide the BibTeX section

    // Create and set the BibTeX citation text container
    const bibtexTextContainer = document.createElement('div');
    bibtexTextContainer.classList.add('bibtex-text-container');

    // Create and set the BibTeX citation text
    const bibtexText = document.createElement('pre');
    bibtexText.classList.add('bibtex-text');
    bibtexText.textContent = study.bibtexData;

    // Append the BibTeX citation text to the text container
    bibtexTextContainer.appendChild(bibtexText);

    // Append the BibTeX text container to the BibTeX section
    bibtexSection.appendChild(bibtexTextContainer);



    // Add a click event listener to copy the BibTeX text to the clipboard
    // Create and set the Copy to Clipboard button
    const copyButton = document.createElement('button');
    copyButton.classList.add('copy-button');
    copyButton.textContent = 'Copy to Clipboard';

    // Add a click event listener to copy the BibTeX text to clipboard
    copyButton.addEventListener('click', () => {
        // Select the BibTeX text
        const bibtexText = bibtexTextContainer.querySelector('.bibtex-text');
        const range = document.createRange();
        range.selectNode(bibtexText);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        try {
            // Attempt to copy the selected text to the clipboard
            document.execCommand('copy');
            // Deselect the text
            window.getSelection().removeAllRanges();
            // Change the button text to indicate success
            copyButton.textContent = 'Copied!';
            copyButton.style.backgroundColor = '#4BB543';
            setTimeout(() => {
                // Reset the button text after a brief delay
                copyButton.textContent = 'Copy to Clipboard';
                copyButton.style.backgroundColor = '#3C6E71';
            }, 1000); // Change back after 1 second (adjust as needed)
        } catch (err) {
            console.error('Unable to copy to clipboard:', err);
            // Handle any errors here
        }
    });

    // Append the Copy to Clipboard button to the BibTeX section
    buttonsDiv.appendChild(copyButton);

    // Add a click event listener to toggle the visibility of the BibTeX section
    bibtexLink.addEventListener('click', () => {
    const isOpen = bibtexSection.style.display === 'block';
    bibtexSection.style.display = isOpen ? 'none' : 'block';

    // Function to calculate and update the heights for the bibtex section and copy button
    function updateHeights() {
        // Calculate the height of the BibTeX section
        const bibtexHeight = bibtexSection.offsetHeight;

        const textContentHeight = textContentDiv.offsetHeight;
        const studyContentHeight = studyContentDiv.offsetHeight;
        const copyButtonHeight = copyButton.offsetHeight;

        // Update other elements or styles based on these heights
        studyContentDiv.style.marginBottom = `calc(${bibtexHeight}px + 5px)`;
        bibtexSection.style.top = `calc(${studyContentHeight}px + 5px)`;
        copyButton.style.top = `calc(${bibtexHeight}px + ${studyContentHeight}px - ${copyButtonHeight}px - 10px)`;
    }

    // Apply a transition to the margin bottom property
    studyContentDiv.style.transition = 'margin-bottom 0.3s ease'; // Adjust the duration and timing function as needed
    bibtexSection.style.transition = 'opacity 1.0s ease'; // Add a transition to opacity

    if (isOpen) {
        // If closing, set opacity to 0 and margin bottom to 0
        bibtexSection.style.opacity = 0;

        // copyButton.style.opacity = 0;
        copyButton.style.pointerEvents = 'none';
        copyButton.classList.remove('active');

        studyContentDiv.style.marginBottom = '0';
        bibtexLink.classList.remove('active');
    } else {
        // If opening, set opacity to 1 and adjust margin bottom
        bibtexSection.style.opacity = 1;

        // copyButton.style.opacity = 0.9;
        copyButton.style.pointerEvents = 'auto'; // Enable pointer events
        copyButton.classList.add('active');

        // Initial calculation
        updateHeights();

        // Listen for window resize events and update heights accordingly
        window.addEventListener('resize', updateHeights);

        // copyButton.style.top = `calc(${bibtexHeight}px + ${buttonsDiv.offsetHeight}px)`;
        bibtexLink.classList.add('active');
    }

    // After the transition is complete, remove the transition property to avoid affecting other changes
    studyContentDiv.addEventListener('transitionend', () => {
        studyContentDiv.style.transition = '';
        bibtexSection.style.transition = '';
    }, { once: true });
    });

    // Append the BibTeX section to the buttons container
    buttonsDiv.appendChild(bibtexLink);
    buttonsDiv.appendChild(bibtexSection);

    // Append the image, text content, and buttons containers to the study content container
    studyContentDiv.appendChild(imgElement);
    textContentDiv.appendChild(buttonsDiv); // Buttons are now below text content
    studyContentDiv.appendChild(textContentDiv);

    // Append the study content container to the main study container
    studyDiv.appendChild(studyContentDiv);

    return studyDiv;
}



// Step 3: Define a function to populate studies
function populateStudies(selectedOnly) {
    const tabContent = document.querySelector('.tab-content');

    // Clear the tab content before populating
    tabContent.innerHTML = '';

    publicationsList.forEach((study) => {
        // Check if the study should be displayed based on the selectedOnly flag
        if (!selectedOnly || study.selected) {
            const studyElement = createStudyElement(study);
            tabContent.appendChild(studyElement);
        }
    });
}

// Step 4: Define a function to handle tab selection
function handleTabSelection(selectedTab) {
    if (selectedTab === 'selected') {
        populateStudies(true); // Display selected studies only
    } else if (selectedTab === 'all') {
        populateStudies(false); // Display all studies
    }
}

// Step 5: Initial population based on the active tab (assumed "selected" is active initially)
handleTabSelection('selected');

// Step 6: Event listeners for tab selection
document.querySelector('.tab-nav .button[href="#selected"]').addEventListener('click', () => {
    handleTabSelection('selected');
});

document.querySelector('.tab-nav .button[href="#all"]').addEventListener('click', () => {
    handleTabSelection('all');
});
