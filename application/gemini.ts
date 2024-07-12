const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1.4,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
   export async function run() {
    const parts = [
      {text: "You are a helper for vets to quickly diagnose and offer first aid instructions based on the animal injury.\nYou help the veterinarian, who can perform technical procedures.\n\n Keep first aid instructions a few sentences long. Do not refer to vets"},
      {text: "Injury: Cat Bite Abscess"},
      {text: "first-aid: Shave and clean the area around the abscess with an antiseptic solution.Lance and drain the abscess under local or general anesthesia.Flush the wound thoroughly with sterile saline solution.Insert a drain if necessary to prevent reformation of the abscess.Prescribe a course of broad-spectrum antibiotics and pain relief."},
      {text: "Injury: Deep laceration on a dog's hind leg with active bleeding"},
      {text: "first-aid: 1. Apply direct pressure with a clean cloth or bandage to control bleeding. 2. If possible, elevate the injured leg. 3. Prevent the dog from licking the wound."},
      {text: "Injury: Possible fracture of a bird's wing"},
      {text: "first-aid: 1. Gently restrain the bird, avoiding pressure on the injured wing. 2. If possible, immobilize the wing with a splint or bandage using lightweight materials. 3. Place the bird in a quiet, dark carrier to minimize stress."},
      {text: "Injury: Heatstroke in a horse"},
      {text: "first-aid: 1. Immediately move the horse to a shaded area. 2. Apply cool water to the horse's body, especially the neck and legs. 3. Offer the horse small amounts of cool water to drink. 4. Monitor the horse's rectal temperature and continue cooling efforts until the temperature normalizes."},
      {text: "Injury: Snakebite on a cat's paw"},
      {text: "first-aid: 1. Keep the cat calm and restrict movement. 2. If possible, identify the snake species. 3. Clean the bite area with mild soap and water. 4. DO NOT apply a tourniquet or attempt to suck out venom."},
      {text: "Injury: Choking dog (object lodged in throat)"},
      {text: "first-aid: 1. Open the dog's mouth and look for the object. If visible and reachable, carefully remove it. 2. If unable to remove the object, perform the Heimlich maneuver for dogs (abdominal thrusts). 3. If unsuccessful, start CPR if the dog becomes unconscious."},
      {text: "Injury: Seizures in a rabbit"},
      {text: "first-aid: 1. Ensure the rabbit is in a safe, cushioned area to prevent injury during the seizure. 2. DO NOT restrain the rabbit. 3. Time the duration of the seizure. 4. After the seizure, keep the rabbit warm and quiet."},
      {text: "Injury: Eye injury (corneal ulcer) in a cow"},
      {text: "first-aid: 1. Flush the eye with clean water or saline solution. 2. Protect the eye with a clean cloth or eye patch. ."},
      {text: "Injury: Burns (thermal) on a pig's flank"},
      {text: "first-aid: 1. Cool the burn area with cool, running water for 10-15 minutes. 2. Apply a non-stick sterile dressing to the burn. 3. DO NOT apply ointments, creams, or butter to the burn."},
      {text: "Injury: Laceration"},
      {text: "first-aid: Clean the wound thoroughly with sterile saline solution. Trim hair around the wound site to prevent contamination. Administer local anesthesia if required for pain management.Suture the wound using non-absorbable sutures if deeper than superficial layers.Apply antibiotic ointment and cover with a sterile bandage .Prescribe a course of oral antibiotics to prevent infection. Advise the owner to prevent the animal from licking or scratching the wound."},
      {text: "Injury: Fractured Limb"},
      {text: "first-aid: Perform a thorough physical examination and obtain radiographs to confirm the fracture type and location. Administer pain relief and sedatives as needed. For stable fractures, apply a splint or cast to immobilize the limb. For unstable or complex fractures, recommend surgical intervention to realign and stabilize the bones using plates, pins, or external fixators. Schedule follow-up appointments to monitor healing and adjust treatment.\nAdvise limited activity and provide guidance on rehabilitation exercises."},
      {text: "Injury: Snake Bite"},
      {text: "first-aid: Identify the type of snake if possible to determine the appropriate antivenom. Clean the bite area with antiseptic solution to prevent infection. Administer intravenous fluids to maintain blood pressure and hydration. Administer appropriate antivenom based on the type of snake and severity of envenomation. Provide pain relief and monitor the patient closely for signs of coagulopathy, neurotoxicity, or renal failure."},
      {text: "Injury: Burn Wound"},
      {text: "first-aid: Clean the burn area with sterile saline and remove any debris. Apply silver sulfadiazine cream to prevent infection and promote healing. Cover the burn with a sterile, non-adherent dressing and change it daily. Monitor for signs of infection, such as increased redness, swelling, or discharge."},
      {text: "Injury: Foreign Body Ingestion"},
      {text: "first-aid: Confirm the presence and location of the foreign body with radiographs or ultrasound.  Induce vomiting if the foreign body is recent and not sharp or toxic, using apomorphine or hydrogen peroxide. For non-obstructive and small objects, monitor closely and advise a high-fiber diet to facilitate passage. For obstructive or hazardous objects, recommend endoscopic retrieval or surgical removal. Administer pain relief and antibiotics post-procedure as needed."},
      {text: "Injury: bleeding on cow"},
      {text: "first-aid: 1. Locate the source: Determine the origin of the bleeding (e.g., wound, nose, rectum).\n2. **Apply direct pressure:** Use a clean cloth or bandage to apply direct pressure to the bleeding site.\n3. **Elevate the injured area:** If possible, elevate the bleeding limb or area to slow blood flow.\n4. **Control the environment:** Keep the cow calm and in a safe, clean environment.\n5. **Monitor vital signs:** Observe the cow's breathing, heart rate, and overall condition."},
      {text: "Injury: bite wounds on sheep"},
      {text: "first-aid: Injury: bite wounds on sheep\nfirst-aid: 1. Clean the wound thoroughly with antiseptic solution, removing any debris. 2. Apply a topical antibiotic ointment to prevent infection. 3.  If the wound is deep or extensive, consider suturing. 4.  Monitor the sheep for signs of infection and administer antibiotics if necessary."},
      {text: "Injury: Hoof Abscess (Horse)"},
      {text: "first-aid: erform a thorough hoof examination and use hoof testers to localize the abscess.Pare away the hoof to drain the abscess and release pressure.Flush the abscess cavity with antiseptic solution.Soak the hoof in warm Epsom salt solution to promote further drainage.Apply a poultice and bandage the hoof to protect it.Administer anti-inflammatory medications for pain management.Advise stall rest until the abscess has resolved and the horse is sound."},
      {text: "Injury: Eye Trauma"},
      {text: "first-aid: Perform a thorough eye examination, including fluorescein staining to detect corneal ulcers or abrasions.Administer topical antibiotics and anti-inflammatory eye drops.Provide pain relief with systemic NSAIDs or opiates if necessary.Protect the eye with an Elizabethan collar to prevent further injury.Monitor for signs of infection, increased pain, or vision loss."},
      {text: "Injury: Abrasions and Minor Cuts (Dog)"},
      {text: "first-aid: Clean the wound with sterile saline solution to remove debris.Trim hair around the wound to prevent contamination.Apply a topical antibiotic ointment to prevent infection.Cover the wound with a sterile bandage to protect it from further injury.Advise the owner to keep the wound clean and dry and to prevent the animal from licking or scratching the wound."},
      {text: "Injury: Heatstroke (Dog)"},
      {text: "first-aid: Move the dog to a cool, shaded area immediately.Begin cooling measures with lukewarm water and fans; avoid ice-cold water.Check the dog's rectal temperature every few minutes.Administer intravenous fluids to counteract dehydration and support circulation.Provide oxygen therapy if the dog shows signs of respiratory distress.Monitor vital signs closely and adjust treatment as needed.Once stabilized, perform blood tests to assess organ function."},
      {text: "Injury: Broken Tail (Cat)"},
      {text: "first-aid: Perform a physical examination and obtain radiographs to confirm the fracture.Assess the need for amputation if the fracture is severe or circulation is compromised.Administer pain relief and anti-inflammatory medication.If the fracture is stable, immobilize the tail with a splint or bandage.Provide instructions for home care, including keeping the bandage clean and dry."},
      {text: "Injury: Barbed Wire Injury (Horse)"},
      {text: "first-aid: Clean the wound thoroughly with sterile saline to remove debris and contaminants.Trim hair around the wound to facilitate cleaning and assessment.Administer a tetanus booster if the horse’s vaccination status is not current.Suture the wound if it is deep and requires closure; otherwise, apply wound dressing.Prescribe antibiotics to prevent infection and anti-inflammatory medication for pain management."},
      {text: "Injury: Electric Shock (Dog)"},
      {text: "first-aid: Assess the extent of burns and perform a physical examination for cardiac or respiratory distress.Administer oxygen therapy if respiratory distress is noted.Initiate fluid therapy to prevent shock and maintain hydration.Treat burns with appropriate wound care, including debridement and topical antibiotics.Monitor for delayed complications such as cardiac arrhythmias"},
      {text: "Injury: Road Traffic Accident (Cat)"},
      {text: "first-aid: Conduct a thorough physical examination to identify all injuries.Obtain radiographs to assess for fractures, internal injuries, or pneumothorax.Stabilize the patient with IV fluids, oxygen therapy, and pain relief.Perform surgical intervention if necessary to repair fractures or internal injuries.Administer antibiotics to prevent infection.Provide detailed post-operative care instructions, including restricted activity and wound care.Schedule follow-up visits to monitor healing"},
      {text: "Injury: scratch on dog"},
      {text: "first-aid: ##  Scratch on Dog First Aid:\n\n1. **Clean the wound:** Gently wash the scratch with clean, lukewarm water and mild soap.\n2. **Apply antiseptic:** Apply a topical antiseptic solution like povidone-iodine or chlorhexidine to the scratch to prevent infection.\n3. **Monitor:** Keep an eye on the scratch for signs of infection like redness, swelling, or discharge.  If the wound appears deep or shows signs of infection, contact your veterinarian."},
      {text: "Injury: swollen legs on cow"},
      {text: "first-aid: ## Swollen Legs on Cow First Aid:\n\n1. **Assess the severity:** Determine the extent of swelling, whether it's localized to one leg or affects multiple legs, and if there's any pain or lameness.\n2. **Check for underlying causes:**  Look for signs of injury, infection, or other possible causes like milk fever or heartworm.\n3. **Elevate the legs:** If possible, gently elevate the affected legs to reduce swelling and improve circulation.\n4. **Cold compresses:** Apply cool compresses or cold water to the swollen areas to reduce inflammation"},
      {text: "Injury: bites on cat skin"},
      {text: "first-aid: ## Cat Skin Bites First Aid:\n\n1. **Clean the wound:** Gently clean the bite wound with mild soap and lukewarm water.\n2. **Apply antiseptic:** Apply a topical antiseptic solution like povidone-iodine to the bite area to prevent infection.\n3. **Monitor for infection:** Watch the wound for signs of infection, such as redness, swelling, or discharge. If you notice any of these signs, seek immediate veterinary attention."},
      {text: "Injury: "},
      {text: "first-aid: "},
    ];

    const prompt = 'Deep cut on cows leg'
  
    const result = await model.generateContent({
      contents: [{ role: "user", parts }, prompt],
      generationConfig,
    });
    console.log(result.response.text());
  }

  
