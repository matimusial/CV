import { useEffect } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const observedElements = new WeakSet<HTMLElement>();
    const observer = new IntersectionObserver((entries) => revealElements(entries, observer), {
      threshold: 0.08,
      rootMargin: "0px 0px -24px 0px",
    });
    const mutationObserver = new MutationObserver((mutations) => {
      observeAddedRevealElements(mutations, observer, observedElements);
    });

    observeRevealElements(document, observer, observedElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
}

function observeRevealElements(
  root: ParentNode,
  observer: IntersectionObserver,
  observedElements: WeakSet<HTMLElement>,
) {
  if (root instanceof HTMLElement && root.matches("[data-reveal]")) {
    observeRevealElement(root, observer, observedElements);
  }

  const elements = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));

  for (const element of elements) {
    observeRevealElement(element, observer, observedElements);
  }
}

function observeAddedRevealElements(
  mutations: MutationRecord[],
  observer: IntersectionObserver,
  observedElements: WeakSet<HTMLElement>,
) {
  for (const mutation of mutations) {
    for (const node of Array.from(mutation.addedNodes)) {
      if (node instanceof HTMLElement) {
        observeRevealElements(node, observer, observedElements);
      }
    }
  }
}

function observeRevealElement(
  element: HTMLElement,
  observer: IntersectionObserver,
  observedElements: WeakSet<HTMLElement>,
) {
  if (observedElements.has(element)) {
    return;
  }

  observedElements.add(element);
  observer.observe(element);
}

function revealElements(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }
}
