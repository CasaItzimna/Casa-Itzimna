import { client } from "@/lib/client";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const query = '*[_type == "facturas"] | order(_createdAt desc)';
        const resultado = await client.fetch(query);
        res.status(200).json(resultado);
      } catch (error) {
        console.error('Error fetching facturas:', error);
        res.status(500).json({ msg: "Error fetching facturas" });
      }
      break;

    case "POST":
      // Aquí asumiré que ya tienes un objeto `newFactura` creado y listo para ser enviado como JSON en el cuerpo de la solicitud.
      const newFactura = JSON.parse(req.body);
      try {
        await client.create(newFactura);
        res.status(200).json({ msg: `Factura creada, ID del documento es ${newFactura._id}` });
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error creando factura, ver consola" });
      }
      break;

      case "PUT":
        const facturaId = req.body._id;
        const formData = req.body;
        try {
          // Verificar que el ID de la factura sea válido y exista en la base de datos
          const facturaExistente = await client.fetch(`*[_type == "facturas" && _id == "${facturaId}"]`);
          if (facturaExistente.length === 0) {
            res.status(404).json({ msg: `Factura con ID ${facturaId} no existe` });
            return;
          }
          const result = await client
            .patch(facturaId)
            .set({
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              date: formData.date,
              rfc: formData.rfc,
              total: parseInt(formData.total),
              state: formData.state,
              registerDate: new Date(),
            })
            .commit();
          res.status(200).json({ 
            status: result.iscompleted,
            completedAt: result.completedAt,
            msg: `Factura actualizada, ID del documento es ${facturaId}` });
        } catch (error) {
          console.error("Error actualizando factura:", error);
          res.status(500).json({ msg: "Error actualizando factura" });
        }
        break;
        case "DELETE":
          const facturaIdToDelete = req.body._id;
          try {
            await client.delete(facturaIdToDelete);
            console.log('Factura fue eliminada');
            res.setHeader('Cache-Control', 'no-cache');
            res.status(200).json({ msg: "Factura eliminada con éxito" });
          } catch (error) {
            console.error("Error eliminando factura:", error);
            res.status(500).json({ msg: "Error eliminando factura" });
          }
          break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
