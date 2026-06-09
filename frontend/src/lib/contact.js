      const phoneNumber = "905468755644";

  const whatsappMessage =
    "Merhaba, #Ridaq Tekstil toptan tişört ürünleri hakkında bilgi ve teklif almak istiyorum.";

 export const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;